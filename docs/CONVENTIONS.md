# docs/CONVENTIONS.md — Project Conventions (Svelte 5 + SvelteKit 2)

This repo aims for boring, well-documented, widely accepted conventions.  
When in doubt: prefer official Svelte/SvelteKit docs and MDN over blog posts.

---

## 0) Goals (what “good” looks like)

1) Correctness & security  
2) Maintainability & readability  
3) Accessibility (semantic HTML first; ARIA only when needed)  
4) Performance & DX  
5) Cleverness (only if it helps 1–4)

---

## 1) Repo structure and boundaries

### Core folders

- `src/routes/`  
  SvelteKit routes, pages, layouts, endpoints.
- `src/lib/`  
  Shared (safe) code used by both server and client.
- `src/lib/server/`  
  Server-only code (DB clients, secrets, server utilities).
- `static/`  
  Public assets served as-is.

### “Server-only” hard rule

Anything that touches secrets, DB, admin APIs, or privileged operations must live in:

- `src/lib/server/*`
- `+page.server.*`, `+layout.server.*`
- `hooks.server.*`
- `src/routes/**/+server.*` (if it uses secrets / DB)

Never import server-only modules into client code.

---

## 2) Svelte 5 conventions (default: Runes)

### Component style (new code)

- Props: `let { ... } = $props();`
- State: `let x = $state(initial);`
- Derived: `let y = $derived(() => ...);`
- Effects: `$effect(() => { ...; return () => cleanup; });`
- Events: prefer event attributes (`onclick`, `oninput`, etc.) in new code.
- Children/composition: prefer `children` + snippets patterns where appropriate.

### Avoid in new code (unless patching legacy)

- `export let` props
- `$:` reactive labels
- `on:*` directives
- `<slot />`

### Practical rules of thumb

- Keep state local by default; lift state only when needed.
- Prefer derived values over manual syncing.
- Minimize `$effect`; it’s for side-effects, not for data derivation.
- For reusable components: prioritize predictable props + events.

---

## 3) SvelteKit conventions (routing, load, actions)

### Load functions

- Prefer server `load` (`+page.server.ts`) when:
  - data is sensitive, requires secrets, or benefits from SSR
  - you want to avoid duplicate client fetches
- Use client/shared `load` (`+page.ts`) only when:
  - data is public and client navigation is the primary source

### Form actions (default for mutations)

- Mutations should go in `+page.server.ts` `actions`.
- Progressive enhancement first:
  - Works without JS (plain form submit).
  - Add enhancement (`use:enhance`) only when it improves UX.

### Endpoints (`+server.ts`)

- Use for JSON APIs and non-form interactions.
- Keep request/response shapes consistent and versionable.
- Validate input server-side.

---

## 4) Input validation, errors, and response shapes

### Zod (recommended)

- Validate all untrusted input on the server (actions and endpoints).
- Client-side validation is UX; server-side validation is security.

### Action result shape (recommended pattern)

Actions should return a predictable object:

- `success: boolean`
- `message?: string`
- `fieldErrors?: Record<string, string>`
- `formError?: string`
- `data?: ...` (only when safe/needed)

Never return stack traces or secrets to the client.

### Errors & redirects

- Use `redirect(status, location)` for navigation control flow.
- Use `error(status, message)` for expected failures.
- For unexpected failures: log server-side, return a user-safe message.

---

## 5) Security baseline (non-negotiable)

### SSR safety

Never access `window`, `document`, `localStorage` during SSR.  
Guard client-only code with:

```ts
import { browser } from '$app/environment';
if (browser) {
  /* client-only */
}
```

### Secrets & env vars

- Secrets live server-side only.
- Use `$env/static/private` for secrets.
- Use `$env/static/public` for public config.
- Treat anything in client code as public, even if “hidden in UI”.

### Threat checklist triggers

If the feature involves auth, cookies/sessions, roles/permissions, uploads, payments, or user content:

- Confirm authn/authz correctness
- Consider CSRF/XSS risks
- Validate inputs and enforce server-side constraints
- Add basic abuse controls (rate limiting / throttling where appropriate)
- Use secure cookies when relevant

---

## 6) Database conventions (Xata provider)

### Where DB code lives

- DB client creation: `src/lib/server/db.ts` (or `src/lib/server/xata.ts`)
- DB access is server-only (never imported into client code).

### DB usage rules

- Keep DB queries out of components.
- Prefer “service” functions in `src/lib/server/services/*` for:
  - complex queries
  - multi-step operations
  - transactional logic (where applicable)
- Keep request handlers thin: parse → validate → call service → return.

### Environment variables (example names)

- `XATA_API_KEY` (private)
- `XATA_DATABASE_URL` or equivalent (private)

Store these via `$env/static/private`.

---

## 7) Styling conventions (Tailwind)

### Default approach

- Use Tailwind utility classes for most styling.
- Extract repeated UI patterns into components rather than heavy `@apply`.
- Use semantic HTML first; don’t style div soup.

### Component styling rules

- Prefer readable class blocks over micro-optimizing class count.
- Keep layout utilities near the container, typography near the text.

Optional (only if adopted):

- Consider a class ordering tool / formatter for consistency.
- Consider `tailwind-merge` when combining conditional class strings heavily.

---

## 8) TypeScript conventions

- Prefer TypeScript for app code.
- Use `unknown` for untrusted data; refine via Zod.
- Keep types close to the code they describe (avoid a “types landfill”).

---

## 9) Linting / formatting / checks (required commands)

Required before merging:

- `npm run lint` (or `pnpm lint`)
- `npm run check` (Svelte typecheck)
- `npm run build`

Formatting:

- Use Prettier consistently (no style bikeshedding).

---

## 10) Testing conventions (when applicable)

Recommended layers:

- Unit/integration: Vitest
- E2E: Playwright for critical flows (login, create/edit, permissions)

Where tests go (suggested):

- Unit: `src/lib/**/__tests__/*.test.ts`
- E2E: `tests/e2e/*.spec.ts`

Test philosophy:

- Test behavior, not implementation details.
- Cover the “money paths” first.

---

## 11) Accessibility conventions

- Use semantic elements (`button`, `a`, `label`, `fieldset`, headings in order).
- Every input has an associated label.
- Keyboard navigation works by default.
- Focus states are visible.
- Use ARIA only when semantic HTML can’t express the behavior.

---

## 12) Performance conventions

- Avoid unnecessary client fetching; prefer server loads when sensible.
- Avoid overusing effects; derived values are cheaper and clearer.
- Keep pages fast by default:
  - paginate lists
  - avoid loading large datasets in a single request
  - optimize images and avoid layout shift

---

## 13) Git / PR conventions

Commit messages:

- Short, specific, present tense (e.g., “Add admissions enquiry action”)

PR checklist (author):

- [ ] Runs: lint, check, build
- [ ] Validates server-side inputs (Zod or equivalent)
- [ ] No secrets in client bundles
- [ ] Works without JS for key forms (or intentionally documented)
- [ ] Accessible form labels and keyboard interactions
- [ ] Includes a short manual test note (what you clicked)

---

## 14) Documentation conventions

Keep these updated:

- `docs/Reference.md` (canonical links)
- `docs/CONVENTIONS.md` (this file)
- Optional: `docs/DECISIONS.md` (short ADR-style notes for major choices)
