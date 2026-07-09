# João Victor Pedrosa | Portfolio

Portfólio pessoal desenvolvido com `Next.js 14`, `TypeScript`, `Tailwind CSS` e `framer-motion`.

## Tecnologias

- `Next.js 14`
- `React 18`
- `TypeScript`
- `Tailwind CSS`
- `framer-motion`
- `@react-pdf/renderer`
- `Resend`

## Recursos

- Interface bilíngue (`pt-BR` e `en`)
- Hero com identidade visual própria
- Seções de projetos, experiência, educação e stack
- Download de currículo em PDF por rota dinâmica
- Open Graph, `robots.txt`, `sitemap.xml` e JSON-LD
- Formulário de contato com fallback claro quando o serviço de e-mail não está configurado

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Variáveis de ambiente

Crie um arquivo `.env.local` para habilitar o formulário:

```bash
RESEND_API_KEY=
CONTACT_EMAIL_FROM=
CONTACT_EMAIL_TO=
```

- `RESEND_API_KEY`: chave privada da conta no Resend.
- `CONTACT_EMAIL_FROM`: remetente usado pelo Resend. Exemplo: `Portfolio Contact <seu-dominio@seudominio.com>`.
- `CONTACT_EMAIL_TO`: destinatário que receberá as mensagens do formulário.

Sem essas variáveis, o formulário continua visível, mas o envio falha com uma mensagem amigável para o visitante.

## Scripts

```bash
npm run dev
npm run build
npm run lint
```
