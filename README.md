# Harding Christian Academy Website

SvelteKit + Svelte 5 site for Harding Christian Academy, deployed on Vercel Edge.

## Development

```bash
pnpm install
pnpm run dev
```

## Scripts

- `pnpm run dev` — local dev server
- `pnpm run build` — production build
- `pnpm run preview` — preview build
- `pnpm run check` — type + Svelte check
- `pnpm run lint` — Prettier check

## Environment variables

Set these on Vercel (and locally in `.env` if needed):

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER` (optional)
- `SMTP_PASS` (optional)
- `SMTP_FROM`
- `SMTP_TO` (fallback)
- `SMTP_TO_GENERAL` (general enquiries)
- `SMTP_TO_ADMISSIONS` (admissions enquiries)
- `EMAILOCTOPUS_API_KEY` (newsletter integration)
- `EMAILOCTOPUS_LIST_ID`
- `EMAILOCTOPUS_STATUS` (optional, default `SUBSCRIBED`)

## Deployment

This project uses `@sveltejs/adapter-vercel` with Node runtime for email actions.
