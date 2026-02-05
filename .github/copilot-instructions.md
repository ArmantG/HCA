# Copilot instructions

## Project overview

- SvelteKit app using Svelte 5 runes (`$props`, `$state`, `$derived`) and Vite. See [src/routes/+page.svelte](../src/routes/+page.svelte).
- Markdown content is first-class via mdsvex (`.md`/`.svx`). Config in [svelte.config.js](../svelte.config.js).
- Deployment targets Vercel Edge (adapter config in [svelte.config.js](../svelte.config.js)).

## Key structure & data flows

- Routes live in [src/routes](../src/routes); shared layout pattern uses `+layout.svelte` and `+layout.ts` (see [src/routes/+layout.svelte](../src/routes/+layout.svelte) and [src/routes/+layout.ts](../src/routes/+layout.ts)).
- Event content comes from two sources:
  - Markdown posts in [src/content/events](../src/content/events) loaded by `import.meta.glob` in [src/lib/content/events.ts](../src/lib/content/events.ts).
  - Static JSON-like data in [src/lib/data/events.ts](../src/lib/data/events.ts), used by page `load` functions such as [src/routes/+page.ts](../src/routes/+page.ts).
- Components are centralized in [src/components](../src/components) with barrel exports in [src/components/index.ts](../src/components/index.ts). Feature modules live in [src/features](../src/features).

## Styling conventions

- Tailwind CSS v4 is used via `@tailwindcss/vite`. Global theme tokens and custom utilities are defined in [src/app.css](../src/app.css) (`@theme`, custom colors, shadows, animations).
- Prefer Tailwind classes in Svelte templates; use `src/styles/*.css` for shared bespoke styles (e.g., [src/styles/curves.css](../src/styles/curves.css)).

## Tooling & workflows

- Dev: `pnpm dev` (Vite). Host on LAN: `pnpm host`.
- Type checks: `pnpm check` / `pnpm check:watch`.
- Formatting: `pnpm format` (Prettier with Svelte + Tailwind plugins). Lint check: `pnpm lint`.

## Vite/Svelte aliases

- Use path aliases from [vite.config.ts](../vite.config.ts):
  - `$assets`, `$content`, `$utils`, `$lib`, `$styles`, `$getContent`, `$components`.

## Assets & media

- SVGs are compiled as Svelte components via `@poppanator/sveltekit-svg` (see [src/assets](../src/assets)).
- Images use Vite imagetools with default `format=webp` (see [vite.config.ts](../vite.config.ts)).

## Conventions to follow

- Svelte 5 means runes-only by default. Do not use legacy Svelte 3 patterns (e.g., `export let`, `$:` reactive statements, or `on:` DOM events). Use runes like `$props`, `$state`, `$derived`, and `onclick` (see [src/routes/+page.svelte](../src/routes/+page.svelte)).
- Prefer Svelte 5 runes and derived state patterns used in existing routes (e.g., `$derived(data.seniorHighEvents)` in [src/routes/calendar/+page.svelte](../src/routes/calendar/+page.svelte)).
- Keep content files in `src/content/**` and data helpers in `src/lib/**`.

## MCP/agent tool usage

- For Svelte work, always run the Svelte autofix step before final output to validate runes usage and syntax.
- Use available MCP/skills tools when they improve correctness (e.g., Svelte documentation for runes, Tailwind utilities for styling) and prefer workspace searches before guessing.

## Agent workflow guardrails (concise)

- Before editing Category A/B files (`*.svelte`, `src/routes/**/+page*`, `+layout*`, `+server*`, `hooks*`, `src/lib/server/**`), output a short Tool Plan that lists touched file patterns, category, skills to invoke, and MCP plan.
- Do not edit Category A/B files until required skills are invoked. If a required skill is unavailable, stop and explain.
- Use Svelte MCP whenever unsure about runes, routing, load/actions, SSR/hydration boundaries, or when you would otherwise guess. Use Tailwind MCP when uncertain about utilities/variants/arbitrary values or editing Tailwind config/theme.
- When Category B files are changed, include a one-line SSR boundary check in the final report (server vs client execution).
