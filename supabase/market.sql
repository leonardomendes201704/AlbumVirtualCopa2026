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
  duplicate_value integer,
  foil boolean not null default false,
  category_code text,
  title text,
  role text,
  card_type text,
  player_name text,
  position_label text,
  metadata jsonb not null default '{}'::jsonb,
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
  duplicate_value integer,
  foil boolean not null default false,
  category_code text,
  title text,
  role text,
  card_type text,
  player_name text,
  position_label text,
  metadata jsonb not null default '{}'::jsonb,
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

create table if not exists public.market_trade_offers (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.market_listings(id) on delete cascade,
  from_user_id uuid not null references auth.users(id) on delete cascade,
  to_user_id uuid not null references auth.users(id) on delete cascade,
  offered_sticker_id text not null,
  offered_album_number text,
  offered_team_code text,
  offered_team_name text,
  offered_group text,
  offered_rarity text,
  offered_rarity_label text,
  offered_duplicate_value integer,
  offered_foil boolean not null default false,
  offered_category_code text,
  offered_title text,
  offered_role text,
  offered_card_type text,
  offered_player_name text,
  offered_position_label text,
  offered_src text,
  offered_metadata jsonb not null default '{}'::jsonb,
  status text not null default 'pending' check (status in ('pending', 'accepted', 'rejected', 'cancelled')),
  created_at timestamptz default now(),
  responded_at timestamptz
);

alter table public.profiles enable row level security;
alter table public.user_stickers enable row level security;
alter table public.market_listings enable row level security;
alter table public.market_orders enable row level security;
alter table public.market_trade_offers enable row level security;

alter table public.user_stickers add column if not exists duplicate_value integer;
alter table public.user_stickers add column if not exists foil boolean not null default false;
alter table public.user_stickers add column if not exists category_code text;
alter table public.user_stickers add column if not exists title text;
alter table public.user_stickers add column if not exists role text;
alter table public.user_stickers add column if not exists card_type text;
alter table public.user_stickers add column if not exists player_name text;
alter table public.user_stickers add column if not exists position_label text;
alter table public.user_stickers add column if not exists metadata jsonb not null default '{}'::jsonb;
alter table public.market_listings add column if not exists duplicate_value integer;
alter table public.market_listings add column if not exists foil boolean not null default false;
alter table public.market_listings add column if not exists category_code text;
alter table public.market_listings add column if not exists title text;
alter table public.market_listings add column if not exists role text;
alter table public.market_listings add column if not exists card_type text;
alter table public.market_listings add column if not exists player_name text;
alter table public.market_listings add column if not exists position_label text;
alter table public.market_listings add column if not exists metadata jsonb not null default '{}'::jsonb;
alter table public.market_listings add column if not exists listing_type text not null default 'sale';
alter table public.market_listings add column if not exists accepts_trade boolean not null default false;
alter table public.market_listings alter column price drop not null;

do $market_setup$
begin
  if not exists (
    select 1
      from pg_constraint
     where conname = 'market_listings_listing_type_check'
       and conrelid = 'public.market_listings'::regclass
  ) then
    alter table public.market_listings
      add constraint market_listings_listing_type_check
      check (listing_type in ('sale', 'trade', 'sale_or_trade'));
  end if;
end;
$market_setup$;

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

drop policy if exists "market_listings_select_trade_participants" on public.market_listings;
create policy "market_listings_select_trade_participants"
  on public.market_listings for select
  using (
    exists (
      select 1
        from public.market_trade_offers offer
       where offer.listing_id = market_listings.id
         and (auth.uid() = offer.from_user_id or auth.uid() = offer.to_user_id)
    )
  );

drop policy if exists "market_orders_select_own" on public.market_orders;
create policy "market_orders_select_own"
  on public.market_orders for select
  using (auth.uid() = buyer_id or auth.uid() = seller_id);

drop policy if exists "market_trade_offers_select_own" on public.market_trade_offers;
create policy "market_trade_offers_select_own"
  on public.market_trade_offers for select
  using (auth.uid() = from_user_id or auth.uid() = to_user_id);

create index if not exists market_listings_sticker_status_idx
  on public.market_listings (sticker_id, status);

create index if not exists market_trade_offers_listing_status_idx
  on public.market_trade_offers (listing_id, status);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $market_fn$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', 'Colecionador'))
  on conflict (id) do nothing;
  return new;
end;
$market_fn$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create or replace function public.sync_user_snapshot(p_credits integer, p_stickers jsonb)
returns void
language plpgsql
security definer
set search_path = public
as $market_fn$
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

  update public.user_stickers current_sticker
     set available_count = 0,
         updated_at = now()
   where current_sticker.user_id = v_user
     and current_sticker.reserved_count = 0
     and not exists (
       select 1
         from jsonb_array_elements(coalesce(p_stickers, '[]'::jsonb)) snapshot_item
        where snapshot_item->>'id' = current_sticker.sticker_id
     );

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
      duplicate_value,
      foil,
      category_code,
      title,
      role,
      card_type,
      player_name,
      position_label,
      metadata,
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
      nullif(v_item->>'duplicate_value', '')::integer,
      coalesce((v_item->>'foil')::boolean, false),
      v_item->>'category_code',
      v_item->>'title',
      v_item->>'role',
      v_item->>'card_type',
      v_item->>'player_name',
      v_item->>'position_label',
      coalesce(v_item->'metadata', '{}'::jsonb),
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
          duplicate_value = excluded.duplicate_value,
          foil = excluded.foil,
          category_code = excluded.category_code,
          title = excluded.title,
          role = excluded.role,
          card_type = excluded.card_type,
          player_name = excluded.player_name,
          position_label = excluded.position_label,
          metadata = public.user_stickers.metadata || excluded.metadata,
          src = excluded.src,
          available_count = excluded.available_count,
          pasted = public.user_stickers.pasted or excluded.pasted,
          updated_at = now();
  end loop;
end;
$market_fn$;

create or replace function public.create_market_listing(p_sticker_id text, p_price integer)
returns uuid
language plpgsql
security definer
set search_path = public
as $market_fn$
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
    duplicate_value,
    foil,
    category_code,
    title,
    role,
    card_type,
    player_name,
    position_label,
    metadata,
    src,
    price,
    listing_type,
    accepts_trade,
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
    v_sticker.duplicate_value,
    v_sticker.foil,
    v_sticker.category_code,
    v_sticker.title,
    v_sticker.role,
    v_sticker.card_type,
    v_sticker.player_name,
    v_sticker.position_label,
    v_sticker.metadata,
    v_sticker.src,
    p_price,
    'sale',
    false,
    'active'
  )
  returning id into v_listing_id;

  return v_listing_id;
end;
$market_fn$;

create or replace function public.cancel_market_listing(p_listing_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $market_fn$
declare
  v_user uuid := auth.uid();
  v_listing public.market_listings%rowtype;
  v_offer public.market_trade_offers%rowtype;
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

  for v_offer in
    select *
      from public.market_trade_offers
     where listing_id = p_listing_id
       and status = 'pending'
     for update
  loop
    update public.market_trade_offers
       set status = 'cancelled',
           responded_at = now()
     where id = v_offer.id;

    update public.user_stickers
       set reserved_count = greatest(reserved_count - 1, 0),
           available_count = available_count + 1,
           updated_at = now()
     where user_id = v_offer.from_user_id
       and sticker_id = v_offer.offered_sticker_id;
  end loop;

  update public.user_stickers
     set reserved_count = greatest(reserved_count - 1, 0),
         available_count = available_count + 1,
         updated_at = now()
   where user_id = v_user
     and sticker_id = v_listing.sticker_id;
end;
$market_fn$;

create or replace function public.buy_market_listing(p_listing_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public
as $market_fn$
declare
  v_buyer uuid := auth.uid();
  v_listing public.market_listings%rowtype;
  v_order_id uuid;
  v_buyer_credits integer;
  v_offer public.market_trade_offers%rowtype;
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

  if coalesce(v_listing.price, 0) <= 0 then
    raise exception 'Este anuncio nao esta disponivel para compra direta.';
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

  for v_offer in
    select *
      from public.market_trade_offers
     where listing_id = p_listing_id
       and status = 'pending'
     for update
  loop
    update public.market_trade_offers
       set status = 'cancelled',
           responded_at = now()
     where id = v_offer.id;

    update public.user_stickers
       set reserved_count = greatest(reserved_count - 1, 0),
           available_count = available_count + 1,
           updated_at = now()
     where user_id = v_offer.from_user_id
       and sticker_id = v_offer.offered_sticker_id;
  end loop;

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
    duplicate_value,
    foil,
    category_code,
    title,
    role,
    card_type,
    player_name,
    position_label,
    metadata,
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
    v_listing.duplicate_value,
    v_listing.foil,
    v_listing.category_code,
    v_listing.title,
    v_listing.role,
    v_listing.card_type,
    v_listing.player_name,
    v_listing.position_label,
    v_listing.metadata,
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
        duplicate_value = excluded.duplicate_value,
        foil = excluded.foil,
        category_code = excluded.category_code,
        title = excluded.title,
        role = excluded.role,
        card_type = excluded.card_type,
        player_name = excluded.player_name,
        position_label = excluded.position_label,
        metadata = public.user_stickers.metadata || excluded.metadata,
        src = excluded.src,
        updated_at = now();

  insert into public.market_orders (listing_id, buyer_id, seller_id, sticker_id, price)
  values (p_listing_id, v_buyer, v_listing.seller_id, v_listing.sticker_id, v_listing.price)
  returning id into v_order_id;

  return v_order_id;
end;
$market_fn$;

create or replace function public.create_trade_listing(p_sticker_id text)
returns uuid
language plpgsql
security definer
set search_path = public
as $market_fn$
declare
  v_user uuid := auth.uid();
  v_sticker public.user_stickers%rowtype;
  v_listing_id uuid;
begin
  if v_user is null then
    raise exception 'Usuario nao autenticado.';
  end if;

  select *
    into v_sticker
    from public.user_stickers
   where user_id = v_user
     and sticker_id = p_sticker_id
   for update;

  if not found or v_sticker.available_count <= 1 then
    raise exception 'Apenas duplicatas disponiveis podem ser anunciadas para troca.';
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
    duplicate_value,
    foil,
    category_code,
    title,
    role,
    card_type,
    player_name,
    position_label,
    metadata,
    src,
    price,
    listing_type,
    accepts_trade,
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
    v_sticker.duplicate_value,
    v_sticker.foil,
    v_sticker.category_code,
    v_sticker.title,
    v_sticker.role,
    v_sticker.card_type,
    v_sticker.player_name,
    v_sticker.position_label,
    v_sticker.metadata,
    v_sticker.src,
    null,
    'trade',
    true,
    'active'
  )
  returning id into v_listing_id;

  return v_listing_id;
end;
$market_fn$;

create or replace function public.create_trade_offer(p_listing_id uuid, p_offered_sticker_id text)
returns uuid
language plpgsql
security definer
set search_path = public
as $market_fn$
declare
  v_user uuid := auth.uid();
  v_listing public.market_listings%rowtype;
  v_offered public.user_stickers%rowtype;
  v_offer_id uuid;
begin
  if v_user is null then
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

  if v_listing.seller_id = v_user then
    raise exception 'Voce nao pode propor troca no proprio anuncio.';
  end if;

  if not coalesce(v_listing.accepts_trade, false) and v_listing.listing_type not in ('trade', 'sale_or_trade') then
    raise exception 'Este anuncio nao aceita troca.';
  end if;

  select *
    into v_offered
    from public.user_stickers
   where user_id = v_user
     and sticker_id = p_offered_sticker_id
   for update;

  if not found or v_offered.available_count <= 1 then
    raise exception 'Apenas duplicatas disponiveis podem ser ofertadas.';
  end if;

  update public.user_stickers
     set available_count = available_count - 1,
         reserved_count = reserved_count + 1,
         updated_at = now()
   where id = v_offered.id;

  insert into public.market_trade_offers (
    listing_id,
    from_user_id,
    to_user_id,
    offered_sticker_id,
    offered_album_number,
    offered_team_code,
    offered_team_name,
    offered_group,
    offered_rarity,
    offered_rarity_label,
    offered_duplicate_value,
    offered_foil,
    offered_category_code,
    offered_title,
    offered_role,
    offered_card_type,
    offered_player_name,
    offered_position_label,
    offered_src,
    offered_metadata,
    status
  )
  values (
    p_listing_id,
    v_user,
    v_listing.seller_id,
    v_offered.sticker_id,
    v_offered.album_number,
    v_offered.team_code,
    v_offered.team_name,
    v_offered."group",
    v_offered.rarity,
    v_offered.rarity_label,
    v_offered.duplicate_value,
    v_offered.foil,
    v_offered.category_code,
    v_offered.title,
    v_offered.role,
    v_offered.card_type,
    v_offered.player_name,
    v_offered.position_label,
    v_offered.src,
    v_offered.metadata,
    'pending'
  )
  returning id into v_offer_id;

  return v_offer_id;
end;
$market_fn$;

create or replace function public.reject_trade_offer(p_offer_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $market_fn$
declare
  v_user uuid := auth.uid();
  v_offer public.market_trade_offers%rowtype;
begin
  if v_user is null then
    raise exception 'Usuario nao autenticado.';
  end if;

  select *
    into v_offer
    from public.market_trade_offers
   where id = p_offer_id
     and status = 'pending'
     and to_user_id = v_user
   for update;

  if not found then
    raise exception 'Proposta nao encontrada.';
  end if;

  update public.market_trade_offers
     set status = 'rejected',
         responded_at = now()
   where id = p_offer_id;

  update public.user_stickers
     set reserved_count = greatest(reserved_count - 1, 0),
         available_count = available_count + 1,
         updated_at = now()
   where user_id = v_offer.from_user_id
     and sticker_id = v_offer.offered_sticker_id;
end;
$market_fn$;

create or replace function public.accept_trade_offer(p_offer_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $market_fn$
declare
  v_user uuid := auth.uid();
  v_offer public.market_trade_offers%rowtype;
  v_listing public.market_listings%rowtype;
  v_other_offer public.market_trade_offers%rowtype;
begin
  if v_user is null then
    raise exception 'Usuario nao autenticado.';
  end if;

  select *
    into v_offer
    from public.market_trade_offers
   where id = p_offer_id
     and status = 'pending'
     and to_user_id = v_user
   for update;

  if not found then
    raise exception 'Proposta nao encontrada.';
  end if;

  select *
    into v_listing
    from public.market_listings
   where id = v_offer.listing_id
     and status = 'active'
     and seller_id = v_user
   for update;

  if not found then
    raise exception 'Anuncio indisponivel.';
  end if;

  update public.market_trade_offers
     set status = 'accepted',
         responded_at = now()
   where id = p_offer_id;

  update public.market_listings
     set status = 'sold',
         sold_at = now()
   where id = v_listing.id;

  update public.user_stickers
     set reserved_count = greatest(reserved_count - 1, 0),
         updated_at = now()
   where user_id = v_listing.seller_id
     and sticker_id = v_listing.sticker_id;

  update public.user_stickers
     set reserved_count = greatest(reserved_count - 1, 0),
         updated_at = now()
   where user_id = v_offer.from_user_id
     and sticker_id = v_offer.offered_sticker_id;

  insert into public.user_stickers (
    user_id,
    sticker_id,
    album_number,
    team_code,
    team_name,
    "group",
    rarity,
    rarity_label,
    duplicate_value,
    foil,
    category_code,
    title,
    role,
    card_type,
    player_name,
    position_label,
    metadata,
    src,
    available_count
  )
  values (
    v_offer.from_user_id,
    v_listing.sticker_id,
    v_listing.album_number,
    v_listing.team_code,
    v_listing.team_name,
    v_listing."group",
    v_listing.rarity,
    v_listing.rarity_label,
    v_listing.duplicate_value,
    v_listing.foil,
    v_listing.category_code,
    v_listing.title,
    v_listing.role,
    v_listing.card_type,
    v_listing.player_name,
    v_listing.position_label,
    v_listing.metadata,
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
        duplicate_value = excluded.duplicate_value,
        foil = excluded.foil,
        category_code = excluded.category_code,
        title = excluded.title,
        role = excluded.role,
        card_type = excluded.card_type,
        player_name = excluded.player_name,
        position_label = excluded.position_label,
        metadata = public.user_stickers.metadata || excluded.metadata,
        src = excluded.src,
        updated_at = now();

  insert into public.user_stickers (
    user_id,
    sticker_id,
    album_number,
    team_code,
    team_name,
    "group",
    rarity,
    rarity_label,
    duplicate_value,
    foil,
    category_code,
    title,
    role,
    card_type,
    player_name,
    position_label,
    metadata,
    src,
    available_count
  )
  values (
    v_listing.seller_id,
    v_offer.offered_sticker_id,
    v_offer.offered_album_number,
    v_offer.offered_team_code,
    v_offer.offered_team_name,
    v_offer.offered_group,
    v_offer.offered_rarity,
    v_offer.offered_rarity_label,
    v_offer.offered_duplicate_value,
    v_offer.offered_foil,
    v_offer.offered_category_code,
    v_offer.offered_title,
    v_offer.offered_role,
    v_offer.offered_card_type,
    v_offer.offered_player_name,
    v_offer.offered_position_label,
    v_offer.offered_metadata,
    v_offer.offered_src,
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
        duplicate_value = excluded.duplicate_value,
        foil = excluded.foil,
        category_code = excluded.category_code,
        title = excluded.title,
        role = excluded.role,
        card_type = excluded.card_type,
        player_name = excluded.player_name,
        position_label = excluded.position_label,
        metadata = public.user_stickers.metadata || excluded.metadata,
        src = excluded.src,
        updated_at = now();

  for v_other_offer in
    select *
      from public.market_trade_offers
     where listing_id = v_listing.id
       and status = 'pending'
       and id <> p_offer_id
     for update
  loop
    update public.market_trade_offers
       set status = 'cancelled',
           responded_at = now()
     where id = v_other_offer.id;

    update public.user_stickers
       set reserved_count = greatest(reserved_count - 1, 0),
           available_count = available_count + 1,
           updated_at = now()
     where user_id = v_other_offer.from_user_id
       and sticker_id = v_other_offer.offered_sticker_id;
  end loop;
end;
$market_fn$;

grant execute on function public.sync_user_snapshot(integer, jsonb) to authenticated;
grant execute on function public.create_market_listing(text, integer) to authenticated;
grant execute on function public.cancel_market_listing(uuid) to authenticated;
grant execute on function public.buy_market_listing(uuid) to authenticated;
grant execute on function public.create_trade_listing(text) to authenticated;
grant execute on function public.create_trade_offer(uuid, text) to authenticated;
grant execute on function public.accept_trade_offer(uuid) to authenticated;
grant execute on function public.reject_trade_offer(uuid) to authenticated;
