# Album Virtual Copa 2026

Album virtual em formato de revista, com flip de paginas, figurinhas coladas e paginas especiais da Copa do Mundo FIFA 2026. O catalogo oficial do app fica em `copa_2026_album_v4_48_selecoes_safe_prompt_image_player_names.json`, com metadados de jogador, posicao, raridade e prompts de imagem.

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
3. Copie Project URL e anon public key para `SUPABASE_URL` e `SUPABASE_ANON_KEY` na Vercel.
4. Copie a connection string do banco para `SUPABASE_DB_URL` na Vercel.
5. Configure `MARKET_SETUP_TOKEN` com um valor secreto grande.
6. Faça redeploy.

O app migra suavemente o saldo e as figurinhas abertas do navegador para o Supabase quando o usuario acessa o mercado. O banco passa a ser a fonte real para anuncios e compras.

### Setup automatico do mercado

Se o Supabase ainda nao tiver as tabelas/funcoes, o app pode tentar criar tudo pela rota server-side `/api/setup-market`.

Variaveis usadas:

```text
SUPABASE_DB_URL=postgresql://...
MARKET_SETUP_TOKEN=um_token_grande
MARKET_AUTO_SETUP=false
```

Para setup manual, chame:

```powershell
Invoke-WebRequest -Method POST -Uri "https://seu-app.vercel.app/api/setup-market" -Headers @{ "x-setup-token" = "seu_token" }
```

Para resolver temporariamente pelo proprio app, defina `MARKET_AUTO_SETUP=true`, faça redeploy, abra o Mercado uma vez e depois volte para `MARKET_AUTO_SETUP=false`.
