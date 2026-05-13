create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  credits integer not null default 0 check (credits >= 0),
  created_at timestamptz default now()
);

create table if not exists public.user_stickers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  sticker_id text not null,
  album_number text,
  team_code text,
  team_name text,
  "group" text,
  rarity text,
  rarity_label text,
  src text,
  available_count integer not null default 0 check (available_count >= 0),
  reserved_count integer not null default 0 check (reserved_count >= 0),
  pasted boolean not null default false,
  updated_at timestamptz default now(),
  unique(user_id, sticker_id)
);

create table if not exists public.market_listings (
  id uuid primary key default gen_random_uuid(),
  seller_id uuid not null references auth.users(id) on delete cascade,
  sticker_id text not null,
  album_number text,
  team_code text,
  team_name text,
  "group" text,
  rarity text,
  rarity_label text,
  src text,
  price integer not null check (price > 0),
  status text not null default 'active' check (status in ('active', 'sold', 'cancelled')),
  created_at timestamptz default now(),
  sold_at timestamptz
);

create table if not exists public.market_orders (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.market_listings(id),
  buyer_id uuid not null references auth.users(id),
  seller_id uuid not null references auth.users(id),
  sticker_id text not null,
  price integer not null check (price > 0),
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;
alter table public.user_stickers enable row level security;
alter table public.market_listings enable row level security;
alter table public.market_orders enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
  on public.profiles for insert
  with check (auth.uid() = id);

drop policy if exists "profiles_update_own_name" on public.profiles;

drop policy if exists "user_stickers_select_own" on public.user_stickers;
create policy "user_stickers_select_own"
  on public.user_stickers for select
  using (auth.uid() = user_id);

drop policy if exists "market_listings_select_active" on public.market_listings;
create policy "market_listings_select_active"
  on public.market_listings for select
  using (status = 'active' or auth.uid() = seller_id);

drop policy if exists "market_orders_select_own" on public.market_orders;
create policy "market_orders_select_own"
  on public.market_orders for select
  using (auth.uid() = buyer_id or auth.uid() = seller_id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', 'Colecionador'))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create or replace function public.sync_user_snapshot(p_credits integer, p_stickers jsonb)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  v_item jsonb;
begin
  if v_user is null then
    raise exception 'Usuario nao autenticado.';
  end if;

  insert into public.profiles (id, display_name, credits)
  values (v_user, 'Colecionador', greatest(coalesce(p_credits, 0), 0))
  on conflict (id) do update
    set credits = greatest(public.profiles.credits, greatest(coalesce(p_credits, 0), 0));

  for v_item in select * from jsonb_array_elements(coalesce(p_stickers, '[]'::jsonb))
  loop
    insert into public.user_stickers (
      user_id,
      sticker_id,
      album_number,
      team_code,
      team_name,
      "group",
      rarity,
      rarity_label,
      src,
      available_count,
      pasted
    )
    values (
      v_user,
      v_item->>'id',
      v_item->>'album_number',
      v_item->>'team_code',
      v_item->>'team_name',
      v_item->>'group',
      v_item->>'rarity',
      v_item->>'rarity_label',
      v_item->>'src',
      greatest(coalesce((v_item->>'count')::integer, 0), 0),
      coalesce((v_item->>'pasted')::boolean, false)
    )
    on conflict (user_id, sticker_id) do update
      set album_number = excluded.album_number,
          team_code = excluded.team_code,
          team_name = excluded.team_name,
          "group" = excluded."group",
          rarity = excluded.rarity,
          rarity_label = excluded.rarity_label,
          src = excluded.src,
          available_count = greatest(public.user_stickers.available_count, excluded.available_count),
          pasted = public.user_stickers.pasted or excluded.pasted,
          updated_at = now();
  end loop;
end;
$$;

create or replace function public.create_market_listing(p_sticker_id text, p_price integer)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  v_sticker public.user_stickers%rowtype;
  v_listing_id uuid;
begin
  if v_user is null then
    raise exception 'Usuario nao autenticado.';
  end if;

  if coalesce(p_price, 0) <= 0 then
    raise exception 'Preco invalido.';
  end if;

  select *
    into v_sticker
    from public.user_stickers
   where user_id = v_user
     and sticker_id = p_sticker_id
   for update;

  if not found or v_sticker.available_count <= 1 then
    raise exception 'Apenas duplicatas disponiveis podem ser anunciadas.';
  end if;

  update public.user_stickers
     set available_count = available_count - 1,
         reserved_count = reserved_count + 1,
         updated_at = now()
   where id = v_sticker.id;

  insert into public.market_listings (
    seller_id,
    sticker_id,
    album_number,
    team_code,
    team_name,
    "group",
    rarity,
    rarity_label,
    src,
    price,
    status
  )
  values (
    v_user,
    v_sticker.sticker_id,
    v_sticker.album_number,
    v_sticker.team_code,
    v_sticker.team_name,
    v_sticker."group",
    v_sticker.rarity,
    v_sticker.rarity_label,
    v_sticker.src,
    p_price,
    'active'
  )
  returning id into v_listing_id;

  return v_listing_id;
end;
$$;

create or replace function public.cancel_market_listing(p_listing_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  v_listing public.market_listings%rowtype;
begin
  if v_user is null then
    raise exception 'Usuario nao autenticado.';
  end if;

  select *
    into v_listing
    from public.market_listings
   where id = p_listing_id
     and seller_id = v_user
     and status = 'active'
   for update;

  if not found then
    raise exception 'Anuncio nao encontrado.';
  end if;

  update public.market_listings
     set status = 'cancelled'
   where id = p_listing_id;

  update public.user_stickers
     set reserved_count = greatest(reserved_count - 1, 0),
         available_count = available_count + 1,
         updated_at = now()
   where user_id = v_user
     and sticker_id = v_listing.sticker_id;
end;
$$;

create or replace function public.buy_market_listing(p_listing_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_buyer uuid := auth.uid();
  v_listing public.market_listings%rowtype;
  v_order_id uuid;
  v_buyer_credits integer;
begin
  if v_buyer is null then
    raise exception 'Usuario nao autenticado.';
  end if;

  select *
    into v_listing
    from public.market_listings
   where id = p_listing_id
     and status = 'active'
   for update;

  if not found then
    raise exception 'Anuncio indisponivel.';
  end if;

  if v_listing.seller_id = v_buyer then
    raise exception 'Voce nao pode comprar seu proprio anuncio.';
  end if;

  select credits
    into v_buyer_credits
    from public.profiles
   where id = v_buyer
   for update;

  if coalesce(v_buyer_credits, 0) < v_listing.price then
    raise exception 'Saldo insuficiente.';
  end if;

  perform 1
    from public.profiles
   where id = v_listing.seller_id
   for update;

  update public.profiles
     set credits = credits - v_listing.price
   where id = v_buyer;

  update public.profiles
     set credits = credits + v_listing.price
   where id = v_listing.seller_id;

  update public.market_listings
     set status = 'sold',
         sold_at = now()
   where id = p_listing_id;

  update public.user_stickers
     set reserved_count = greatest(reserved_count - 1, 0),
         updated_at = now()
   where user_id = v_listing.seller_id
     and sticker_id = v_listing.sticker_id;

  insert into public.user_stickers (
    user_id,
    sticker_id,
    album_number,
    team_code,
    team_name,
    "group",
    rarity,
    rarity_label,
    src,
    available_count
  )
  values (
    v_buyer,
    v_listing.sticker_id,
    v_listing.album_number,
    v_listing.team_code,
    v_listing.team_name,
    v_listing."group",
    v_listing.rarity,
    v_listing.rarity_label,
    v_listing.src,
    1
  )
  on conflict (user_id, sticker_id) do update
    set available_count = public.user_stickers.available_count + 1,
        album_number = excluded.album_number,
        team_code = excluded.team_code,
        team_name = excluded.team_name,
        "group" = excluded."group",
        rarity = excluded.rarity,
        rarity_label = excluded.rarity_label,
        src = excluded.src,
        updated_at = now();

  insert into public.market_orders (listing_id, buyer_id, seller_id, sticker_id, price)
  values (p_listing_id, v_buyer, v_listing.seller_id, v_listing.sticker_id, v_listing.price)
  returning id into v_order_id;

  return v_order_id;
end;
$$;

grant execute on function public.sync_user_snapshot(integer, jsonb) to authenticated;
grant execute on function public.create_market_listing(text, integer) to authenticated;
grant execute on function public.cancel_market_listing(uuid) to authenticated;
grant execute on function public.buy_market_listing(uuid) to authenticated;
