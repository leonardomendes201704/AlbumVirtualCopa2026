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
```

O frontend chama `/api/create-checkout-session`, que cria uma sessao do Stripe Checkout para comprar creditos.

Cartao de teste da Stripe:

```text
4242 4242 4242 4242
```

Use qualquer validade futura e qualquer CVV.
