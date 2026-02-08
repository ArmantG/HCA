# Harding Christian Academy Website

School website built with SvelteKit, Svelte 5, and Tailwind CSS v4. Deployed to Vercel.

## Stack

- **Framework**: SvelteKit 2 + Svelte 5 (runes only)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin
- **Content**: mdsvex for Markdown/MDX rendering
- **Forms**: sveltekit-superforms + Zod validation
- **Deployment**: Vercel (adapter-vercel, Node runtime for server actions)
- **Package manager**: pnpm

## Commands

```bash
pnpm dev          # Local dev server (port 5174)
pnpm host         # Dev server on LAN
pnpm build        # Production build
pnpm preview      # Preview production build
pnpm check        # svelte-kit sync + svelte-check
pnpm check:watch  # Continuous type checking
pnpm lint         # Prettier check
pnpm format       # Prettier auto-format
```

## Project Structure

```
src/
  app.css              # Tailwind v4 config (@theme, @import, custom props)
  app.html             # Shell (includes Lenis smooth scroll)
  routes/              # SvelteKit file-based routing
    +layout.svelte     # Root layout
    +layout.ts         # Root load function
    +page.svelte       # Homepage
    (about)/            # Route group: about, gallery, policies, privacy
    (academics)/        # Route group: academics, foundation/intermediate/senior phase
    admissions/         # Admissions info + apply form (+page.server.ts)
    calendar/           # School calendar
    contact/            # Contact form (+page.server.ts)
    fees/               # Fee information
    news/               # News listing + [slug] detail pages
    api/newsletter/     # API route for EmailOctopus newsletter
    sitemap.xml/        # Generated sitemap
  components/           # Shared UI components (barrel export via index.ts)
    mobile/             # Mobile-specific components
    seo/                # SEO components
  features/             # Feature modules (self-contained)
    calendar/           # Calendar feature (components + assets)
    quick-menu/         # Quick menu feature (components + assets)
  lib/
    config.ts           # App configuration
    constants.ts        # Constants
    stores.ts           # Svelte stores
    types.ts            # TypeScript types
    utils.ts            # Utility functions
    seo.ts              # SEO helpers
    content/            # Content loaders (news.ts, legal.ts)
    data/               # Static data (events.ts)
    newsletter/         # EmailOctopus integration
    server/             # Server-only modules (email.ts, rate-limit.ts)
  content/              # Markdown content files (news articles)
  assets/               # Static assets, SVGs, fonts
  styles/               # Shared CSS (animations.css, curves.css)
  constants/            # App constants
  types/                # TypeScript type definitions
```

## Path Aliases

Defined in `vite.config.ts`. Use these instead of relative paths:

- `$lib` → `src/lib/`
- `$components` → `src/components/`
- `$assets` → `src/assets/`
- `$content` → `content/`
- `$styles` → `src/styles/`

## Svelte 5 Rules (Mandatory)

This project uses Svelte 5 exclusively. All components must use runes syntax.

**Required patterns:**

- `let { prop1, prop2 }: Props = $props()` for component props
- `let value = $state(initial)` for reactive state
- `let computed = $derived(expression)` for derived values
- `$effect(() => { ... })` for side effects
- `onclick={handler}` for DOM events

**Forbidden patterns (Svelte 3/4 legacy):**

- `export let` for props
- `$:` reactive declarations
- `on:click` directive syntax
- `$$props`, `$$restProps` (use `$props()` spread instead)
- `createEventDispatcher` (use callback props)
- `<slot>` (use `{@render children()}` snippet pattern)

When uncertain about runes syntax, event handling, snippet patterns, or SSR boundaries, look up the Svelte 5 documentation before guessing. The `svelte5-runes`, `svelte5-development`, and `svelte-code-writer` skills exist for this purpose.

## Tailwind CSS v4 Rules

Tailwind is configured in `src/app.css` using the v4 CSS-first approach (no `tailwind.config.js`).

**Theme tokens** are defined under `@theme { ... }` in `src/app.css`:

- Brand colors: `accent` (#af992b gold), `accent2`/`navy` (#162b54), `cream` (#f4eddb), `slate`, `silver`, `gold`, `brown`
- Custom shadows: `nav-shadow`, `card`, `card-black`, `chat`, etc.
- Custom animations: `float`, `expand`, `expand2`
- Custom spacing: `88` (22rem), `112` (28rem)

**Conventions:**

- Prefer Tailwind utility classes in Svelte templates
- Use `src/styles/*.css` for complex reusable CSS (curves, animations)
- Dark mode via `@custom-variant dark (&:where(.dark, .dark *))` class strategy
- Typography plugin loaded via `@plugin '@tailwindcss/typography'`
- `tailwind-merge` available for conditional class merging
- `class-variance-authority` (CVA) + `clsx` for component variants

When uncertain about Tailwind v4 utilities, `@theme` syntax, or custom variant definitions, consult `tailwind-setup` or `tailwind-design-system` skills. Tailwind v4 differs significantly from v3 in configuration approach.

## Styling Details

- **Primary font**: `gt-walsheim-pro` (loaded from `src/assets/fonts/`)
- **Additional fonts**: Inter, Figtree, Nunito, Shantell Sans, Josefin Sans, Sansita Swashed, Pacifico
- **Base background**: `var(--color-cream)` / `bg-cream`
- **Scrollbar**: Custom styled (navy track, slate thumb)
- **View transitions**: Enabled via `sveltekit-view-transition`
- **Smooth scroll**: Lenis (loaded in `app.html`)

## Content System

- News articles live in `src/content/news/*.md` as mdsvex files
- Content loaders in `src/lib/content/` use `import.meta.glob` for markdown
- Static data (events, etc.) in `src/lib/data/`
- Content should always be loaded through the existing loader pattern, not direct imports

## Forms & Server Actions

- Forms use `sveltekit-superforms` with `Zod` schemas
- Server actions live in `+page.server.ts` files (admissions/apply, contact)
- Email sending uses `nodemailer` via `src/lib/server/email.ts`
- Rate limiting in `src/lib/server/rate-limit.ts`
- Toast notifications via `svoast`

## Assets & Media

- SVGs compiled as Svelte components via `@poppanator/sveltekit-svg`
- Images processed by `vite-imagetools` (default output: webp)
- Icons via `unplugin-icons` with `@iconify-json/ph` (Phosphor icons) and `@iconify/svelte`
- `lucide-svelte` also available for icons

## Environment Variables

Server-side only (never expose to client):

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`
- `SMTP_TO`, `SMTP_TO_GENERAL`, `SMTP_TO_ADMISSIONS`
- `EMAILOCTOPUS_API_KEY`, `EMAILOCTOPUS_LIST_ID`, `EMAILOCTOPUS_STATUS`

Never commit `.env` files. Never hardcode credentials.

## Prerendering & SSR

- Prerender is enabled with `crawl: true` and `entries: ['*']`
- HTTP errors during prerender are set to `warn` (not fail)
- CSRF trusted origins configured for production and local dev
- Server-only code (`$lib/server/`) must never be imported in client-side files

---

# Agent Workflow

## Mandatory Skill Usage

Before editing Svelte components or SvelteKit route files, the agent must load the relevant skills. Do not guess about Svelte 5, SvelteKit, or Tailwind v4 syntax.

| File type                                   | Required skills                                |
| ------------------------------------------- | ---------------------------------------------- |
| `*.svelte` components                       | `svelte5-runes`, `svelte-code-writer`          |
| `+page.svelte`, `+layout.svelte`            | `svelte5-runes`, `sveltekit-app-builder`       |
| `+page.ts`, `+layout.ts`, `+page.server.ts` | `sveltekit-app-builder`, `svelte5-development` |
| `+server.ts` API routes                     | `sveltekit-app-builder`                        |
| `app.css`, Tailwind theme changes           | `tailwind-setup`, `tailwind-design-system`     |
| UI/UX design decisions                      | `ui-ux-pro-max`, `frontend-ui-ux`              |

## Development Workflow

Use the superpowers workflow for non-trivial work:

1. **Brainstorm first** (`superpowers/skills/brainstorming`) - Before creating new features, components, or making design decisions. Explore requirements and alternatives before touching code.

2. **Write a plan** (`superpowers/skills/writing-plans`) - For multi-step tasks, write a plan before implementation. Break work into atomic, verifiable steps.

3. **Execute the plan** (`superpowers/skills/executing-plans` or `superpowers/skills/subagent-driven-development`) - Follow the plan step by step. Mark progress. Delegate independent tasks to subagents when possible.

4. **Review the work** (`superpowers/skills/requesting-code-review`) - After completing a feature or significant change, request a code review before marking done.

5. **Verify before completion** (`superpowers/skills/verification-before-completion`) - Run `pnpm check` and `pnpm lint` before claiming work is complete. Evidence before assertions.

## When to Use Which Approach

| Situation                   | Approach                                                                        |
| --------------------------- | ------------------------------------------------------------------------------- |
| Single file edit, known fix | Direct edit, no ceremony needed                                                 |
| New component or feature    | Brainstorm → Plan → Execute → Review                                            |
| Bug fix                     | `superpowers/skills/systematic-debugging` — reproduce first, then fix minimally |
| Refactoring across files    | Plan → Execute with subagents → Review                                          |
| UI/UX work                  | Brainstorm with `ui-ux-pro-max` → Implement with `visual-engineering` category  |
| Git operations              | Always use `git-master` skill                                                   |

## Verification Checklist

Before reporting any task as complete:

1. Run `pnpm check` — no new type errors introduced
2. Run `pnpm lint` — formatting is clean (or run `pnpm format` to fix)
3. Check `lsp_diagnostics` on every changed `.svelte` and `.ts` file
4. Confirm no Svelte 3/4 patterns were introduced
5. Confirm server-only imports stay in server-only files

## Code Quality Rules

- No `any` types. No `@ts-ignore`. No `@ts-expect-error`.
- No empty catch blocks.
- No `console.log` left in production code.
- Imports should use path aliases, not long relative paths.
- Component files should be PascalCase. Utility files should be camelCase.
- Feature modules should be self-contained in `src/features/<name>/`.
- Shared components go in `src/components/` with barrel exports in `index.ts`.
