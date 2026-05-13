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
