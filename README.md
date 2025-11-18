# PINX — Pinterest Premium

Marketplace/galeria de inspirações com curadoria, boards, busca visual e conexões sociais. Projeto Next.js com foco em experiência premium, performance e SEO.

## Stack
- Next.js (App Router, RSC)
- TypeScript, Tailwind, Radix UI, Framer Motion
- next-themes (temas: claro, escuro, corporativo)
- Mock data (sem API)

## Scripts
- `npm run dev` — desenvolvimento
- `npm run build && npm start` — produção
- `npm run lint` — lint
- `npm run format` — formatar com Prettier

## Rodando localmente
1. Instale dependências: `npm install`
2. Rode o servidor: `npm run dev`
3. Acesse: http://localhost:3000

## Estrutura
- `src/app` — rotas (landing, feed, board, upload, perfil, busca, admin)
- `src/components` — header, feed masonry, UI primitives
- `src/mock` — dados mock (pins, boards, users)
- `src/styles` — estilos globais + tokens de tema

## Temas
- Claro (default)
- Escuro (`.dark`)
- Corporativo (`.corporate`)

Para ativar o corporativo, adicione `class="corporate"` na tag `<html>` (ou via toggle futuro).

## Próximos passos
- Design System completo (Storybook)
- Testes (Vitest/Playwright)
- SEO avançado (schema.org, OG dinâmico)
- Integração futura com API
# A-melhor---rede---social
