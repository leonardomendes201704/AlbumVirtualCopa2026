# Album Virtual Copa 2026

Album virtual em formato de revista, com flip de paginas, figurinhas coladas automaticamente e paginas especiais da Copa do Mundo FIFA 2026.

## Rodar localmente

```powershell
node .\server.js
```

Acesse:

```text
http://127.0.0.1:5183/
```

## Atualizar figurinhas

Coloque novas figurinhas em:

```text
Paginas/Figurinhas
```

Use o padrao:

```text
Brasil-001.png
Brasil-002.png
AfricaDoSul-001.png
```

Depois gere o manifesto estatico:

```powershell
node .\generate-figurinhas-manifest.js
```

## Publicar na Vercel

Este projeto funciona como site estatico. Na Vercel:

- Framework Preset: `Other`
- Build Command: vazio
- Output Directory: vazio ou `.`

O arquivo `figurinhas.json` precisa estar atualizado antes de cada deploy.

## Stripe em modo teste

Configure as variaveis de ambiente no projeto da Vercel:

```text
STRIPE_SECRET_KEY=sk_test_...
APP_URL=https://seu-projeto.vercel.app
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=ey...
```

O frontend chama `/api/create-checkout-session`, que cria uma sessao do Stripe Checkout para comprar creditos.

Cartao de teste da Stripe:

```text
4242 4242 4242 4242
```

Use qualquer validade futura e qualquer CVV.

## Mercado com Supabase

O mercado usa Supabase para autenticar o usuario, reservar duplicatas anunciadas e comprar/vender com creditos internos.

1. Crie um projeto no Supabase.
2. Em Authentication, habilite Anonymous Sign-Ins para o app entrar sem tela de login nesta primeira versao.
3. Abra o SQL Editor e execute `supabase/market.sql`.
4. Copie Project URL e anon public key para `SUPABASE_URL` e `SUPABASE_ANON_KEY` na Vercel.
5. Faça redeploy.

O app migra suavemente o saldo e as figurinhas abertas do navegador para o Supabase quando o usuario acessa o mercado. O banco passa a ser a fonte real para anuncios e compras.
