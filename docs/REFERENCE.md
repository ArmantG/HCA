# Reference.md — Svelte 5 (Runes) + SvelteKit + Tailwind + ESLint + Node

A curated, low-noise set of canonical references for this repo.
Prefer these sources over random blog posts when behavior is version-sensitive.

---

## Core: Svelte 5 (Runes)
- Svelte Docs (main entry): https://svelte.dev/docs
- Runes overview / philosophy: https://svelte.dev/blog/runes
- $props: https://svelte.dev/docs/svelte/$props
- $state: https://svelte.dev/docs/svelte/$state
- Svelte 5 migration guide (from Svelte 4): https://svelte.dev/docs/svelte/v5-migration-guide

---

## Core: SvelteKit
- SvelteKit docs (start here): https://svelte.dev/docs/kit
- Project structure: https://svelte.dev/docs/kit/project-structure
- Routing: https://svelte.dev/docs/kit/routing
- Loading data (load): https://svelte.dev/docs/kit/load
- Form actions: https://svelte.dev/docs/kit/form-actions
- $app/forms (enhance + helpers): https://svelte.dev/docs/kit/$app-forms
- Environment variables ($env/*):  
  - $env/static/private: https://svelte.dev/docs/kit/$env-static-private  
  - $env/static/public: https://svelte.dev/docs/kit/$env-static-public
- Build & deploy:
  - Adapters overview: https://svelte.dev/docs/kit/adapters
  - adapter-node: https://svelte.dev/docs/kit/adapter-node
  - adapter-vercel: https://svelte.dev/docs/kit/adapter-vercel
  - adapter-auto: https://svelte.dev/docs/kit/adapter-auto

Tutorials (great for patterns & “why”):
- SvelteKit tutorial: https://svelte.dev/tutorial/kit/introducing-sveltekit
- Progressive enhancement: https://svelte.dev/tutorial/kit/progressive-enhancement
- Customizing use:enhance: https://svelte.dev/tutorial/kit/customizing-use-enhance

---

## Styling: Tailwind CSS
- Tailwind docs (start here): https://tailwindcss.com/docs
- Tailwind + SvelteKit guide: https://tailwindcss.com/docs/guides/sveltekit
- Tailwind + Vite guide (useful background): https://tailwindcss.com/docs/guides/vite

Helpful Tailwind “how to think” pages:
- Utility-first fundamentals: https://tailwindcss.com/docs/utility-first
- Hover, focus, and other states: https://tailwindcss.com/docs/hover-focus-and-other-states
- Responsive design: https://tailwindcss.com/docs/responsive-design
- Dark mode: https://tailwindcss.com/docs/dark-mode

---

## Linting: ESLint (Svelte-aware)
- ESLint docs (start here): https://eslint.org/docs/latest/
- Getting started: https://eslint.org/docs/latest/use/getting-started
- Config (flat config etc.): https://eslint.org/docs/latest/use/configure/

Svelte ESLint:
- Official eslint-plugin-svelte docs: https://sveltejs.github.io/eslint-plugin-svelte/
- Svelte CLI add-on for ESLint (recommended setup): https://svelte.dev/docs/cli/eslint

---

## Formatting: Prettier
- Prettier docs: https://prettier.io/docs/
- Configuration: https://prettier.io/docs/configuration
- CLI usage: https://prettier.io/docs/cli/

Note: If you use Prettier with Svelte, ensure you have the right Svelte formatter tooling configured in your editor/workspace.

---

## Runtime: Node.js
- Node.js home: https://nodejs.org/
- Node.js API docs (all-in-one): https://nodejs.org/api/all.html

---

## Package Management (recommended)
- pnpm docs: https://pnpm.io/
- Installation: https://pnpm.io/installation

---

## TypeScript
- TypeScript docs (start here): https://www.typescriptlang.org/docs/
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/intro.html

Svelte-specific TS note:
- Svelte TypeScript docs: https://svelte.dev/docs/svelte/typescript

---

## Web Platform Basics (HTML/CSS/JS)
- MDN Web Docs: https://developer.mozilla.org/en-US/
- HTML: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS: https://developer.mozilla.org/en-US/docs/Web/CSS
- JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript

Compatibility checks:
- Can I use (browser support tables): https://caniuse.com/

---

## Validation / Schemas (recommended)
- Zod docs: https://zod.dev/
- Zod API reference: https://zod.dev/api

---

## Testing
Unit/integration (Vite-native):
- Vitest guide: https://vitest.dev/guide/
- Vitest API: https://vitest.dev/api/

E2E (browser):
- Playwright docs: https://playwright.dev/docs/intro

---

## Data / DB Provider: Xata (Postgres platform)
- Xata docs overview: https://xata.io/documentation/overview
- Quickstart: https://xata.io/documentation/quickstart
- CLI: https://xata.io/documentation/cli
- API keys: https://xata.io/documentation/platform/api-key

---

## Security (keep close)
OWASP Cheat Sheet Series (start here):
- https://cheatsheetseries.owasp.org/

High-signal pages:
- CSRF prevention: https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html
- XSS prevention: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
- Session management: https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html
- Content Security Policy (CSP): https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html

---

## Accessibility (don’t wing it)
- ARIA Authoring Practices Guide (APG): https://www.w3.org/WAI/ARIA/apg/
- WCAG 2.2 Quick Reference: https://www.w3.org/WAI/WCAG22/quickref/

---

## Performance
- web.dev Learn Performance: https://web.dev/learn/performance/
- PageSpeed Insights: https://pagespeed.web.dev/

---

## Editor / Tooling (quality-of-life)
- Svelte for VS Code extension: https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode
- Svelte Language Tools repo: https://github.com/sveltejs/language-tools
- sv check (typechecking / diagnostics): https://svelte.dev/docs/cli/sv-check

---

## Quick commands (common)
Scaffold:
- npx sv create my-app

Add common tooling:
- npx sv add eslint
- npx sv check

Run:
- npm run dev
- npm run build
- npm run preview

---

## Project Conventions (fill in for this repo)
- Preferred package manager: pnpm | npm
- Styling: Tailwind | CSS modules | plain CSS
- Form strategy: SvelteKit actions + progressive enhancement first
- Validation: Zod on the server for all untrusted input
- Testing: Vitest for unit/integration, Playwright for E2E
- Deployment: adapter-node | adapter-vercel | adapter-auto
