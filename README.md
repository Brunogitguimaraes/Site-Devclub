## 🎨 Preview

### Desktop/Mobile
<div align="center">
  <img src=".github/assets/DevClub-img.png" alt="DevClub Hero Desktop" width="100%" style="border-radius: 8px; margin: 20px 0;">
</div>

# DevClub

Landing page do DevClub construída com React, Vite e Tailwind CSS. O projeto usa um monorepo leve: a aplicação web fica em `apps/web` e o build de produção é centralizado em `dist/apps/web`.

## Tecnologias

- React 18 e Vite
- Tailwind CSS
- Framer Motion
- React Router
- ESLint

## Pré-requisitos

- Node.js 22 (a versão recomendada está em `.nvmrc`)
- npm

## Executar localmente

```bash
npm ci
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia a aplicação em desenvolvimento. |
| `npm run build` | Gera o build de produção em `dist/apps/web`. |
| `npm run lint` | Executa a análise estática do código. |
| `npm start` | Inicia o servidor Express incluído no projeto. |

## Estrutura

```text
apps/web/
  src/
    components/    # componentes reutilizáveis e seções da página
    data/          # conteúdo estruturado
    hooks/         # hooks personalizados
    lib/           # utilitários
    pages/         # páginas da aplicação
  vite.config.js
.github/workflows/ # validação e deploy no GitHub Pages
dist/apps/web/     # arquivos gerados pelo build (ignorado pelo Git)
```

## Deploy na Netlify

O arquivo `netlify.toml` já define a configuração necessária:

- comando de build: `npm --workspace web run build`
- diretório publicado: `dist/apps/web`
- Node.js 22

No painel da Netlify, deixe os campos de comando e diretório de publicação em branco para que a configuração versionada seja usada. Se preferir preencher o painel, use exatamente os mesmos valores acima.

## Integração contínua

O workflow em `.github/workflows/ci.yml` instala as dependências e valida o build em cada push na `main` e em pull requests. O workflow `deploy-pages.yml` continua responsável pelo deploy no GitHub Pages.

## Licença

Este projeto está sob a licença MIT.
