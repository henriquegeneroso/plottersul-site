# Cloudflare Pages

Configuração do projeto conectado ao GitHub:

- Production branch: `main`
- Root directory: `pages`
- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `out`
- Environment variable: `NODE_VERSION` = `22`

O comando copia o conteúdo do site em `institucional` e gera uma exportação estática com Next.js. O menu, o tema e os links de contato funcionam no navegador. Não é necessário comando Wrangler.

Para testar localmente: `npm ci` e `npm run build` nesta pasta.
