# Code & UI Review — Harding Christian Academy Website

## Summary

Overall the site is well-built. Clean layout, good content structure, forms work correctly, mobile responsive. The main issues are around **factual accuracy conflicts**, **Svelte 4 legacy code in a few components**, and **SEO metadata pointing to the wrong domain**.

**Verification:** `pnpm check` = 0 errors, 8 warnings (unused CSS). `pnpm lint` = 124 files unformatted.

---

## Priority 1 — Critical (should fix before production)

### 1. Hardcoded wrong domain in SEO components

**Files:** `src/components/seo/SchemaOrg.svelte`, `src/components/seo/SEO.svelte`

Multiple hardcoded references to `discipulusbibliae.co.za` — this appears to be a template from a different project. The production `https://hardingchristianacademy.co.za` should replace all of them.

```svelte
<!-- SchemaOrg.svelte line 186 -->
content={'https://discipulusbibliae.co.za/og-image.png'}
<!-- Should be: hardingchristianacademy.co.za -->

<!-- SEO.svelte line 98 -->
property="og:image" content={'https://discipulusbibliae.co.za/og-image.png'}
<!-- Should be: hardingchristianacademy.co.za -->
```

Also in SchemaOrg.svelte: `sameAs` URLs point to `discipulusbibliae.co.za`. These affect Google's understanding of the organization entity.

### 2. Grade listing conflict

**Files:** `src/routes/admissions/+page.svelte` (line 52) vs `src/routes/admissions/apply/+page.server.ts` (line 44)

- The admissions info page says: "Admissions are open for **Grades 1 to 7**"
- The application form dropdown offers **Grades R through 12**

This is a direct contradiction. Parents will see different grade options depending on which page they land on. Fix by confirming the actual grades offered and updating both locations.

### 3. Svelte 4 legacy syntax in 4 components

These files still use `export let` and `on:event` directives. They should be migrated to runes.

| File                                  | Issues                                         | Lines     |
| ------------------------------------- | ---------------------------------------------- | --------- |
| `src/components/seo/SchemaOrg.svelte` | All props use `export let`. Has `any` type.    | 215 lines |
| `src/components/seo/SEO.svelte`       | All props use `export let`. Has `console.log`. | 106 lines |
| `src/components/BlurFade.svelte`      | `export let`, `on:inview_change`, `<slot>`     | 48 lines  |
| `src/components/PageTitle.svelte`     | Uses `$props()` but has `<style lang="scss">`  | 141 lines |

BlurFade is the simplest migration (imports from `svelte-motion` and `svelte-inview` — these packages must support Svelte 5 runes, or a wrapper is needed). SchemaOrg and SEO are larger but straightforward refactors.

### 4. Empty site configuration

**File:** `src/lib/config.ts`

Every field is an empty string. This file is the intended single source of truth for site metadata but it's never populated.

```typescript
// Current state:
export const SITE_TITLE = '' // Empty
export const SITE_AUTHOR = '' // Empty
export const SITE_DOMAIN = '' // Empty
export const SITE_URL = '' // Empty
```

Meanwhile, `src/lib/seo.ts` has its own hardcoded `SITE_URL` and `DEFAULT_OG_IMAGE`. These two files should be reconciled — either config.ts feeds into seo.ts, or seo.ts becomes the single config location and config.ts is removed.

### 5. Bank account under different entity name

**File:** `src/routes/fees/+page.svelte` (line ~98)

The banking details show the account name as **"Amorette Artworks & Projects CC"** — not "Harding Christian Academy". If this is a holding company or registered business name, that's fine but should be explained. Otherwise, parents may be confused or concerned about sending school fees to a differently-named account.

---

## Priority 2 — High Impact

### 6. Console.log calls in production code

Three files contain `console.log` in dev/production paths:

**SEO.svelte** (line 29):

```typescript
console.log('SEO Init:', { title, description, canonical, robots, ogTitle, ...}); // $in:dev
```

**Newsletter.svelte** (line 85):

```typescript
console.log('error:', e) // dev error log
```

**admissions/apply/+page.server.ts**: Check whether `console.log` appears in production error paths.

These should either be removed or gated behind an environment check (e.g., `import { dev } from '$app/environment'`).

### 7. Fix `any` types

| File                                  | Line | Issue                                            |
| ------------------------------------- | ---- | ------------------------------------------------ |
| `src/components/seo/SchemaOrg.svelte` | 18   | `let { type = 'WebSite' as any }`                |
| `src/routes/+layout.svelte`           | 12   | `let { children }: { children: any } = $props()` |

For SchemaOrg, define a proper union type for `type`. For the layout, `children` should be typed as `Snippet` from Svelte:

```typescript
import type { Snippet } from 'svelte'
let { children }: { children: Snippet } = $props()
```

### 8. Replace deprecated `.substr()`

**File:** `src/lib/utils.ts` (line 52)

```typescript
// Current:
export const slugify = (text: string) =>
	text
		.toLowerCase()
		.substr(0, 50)
		.replace(/[^\w]+/g, '-')

// Fix:
export const slugify = (text: string) =>
	text
		.toLowerCase()
		.substring(0, 50)
		.replace(/[^\w]+/g, '-')
```

`.substr()` is deprecated in ECMAScript. Use `.substring()` or `.slice()`.

### 9. Clean unused CSS

**File:** `src/components/Newsletter.svelte`

`pnpm check` reports 7 unused CSS selector warnings. Remove the dead selectors or the code that would have used them.

### 10. Format the codebase

124 files need Prettier formatting (`pnpm lint` reports all of them). This is a one-time `pnpm format` run to clean up. The Lenis vendor file warnings can be ignored (add to `.prettierignore` if desired).

### 11. Broken PDF policy links

Multiple pages link to PDFs that don't exist:

- `/policies/admissions-policy.pdf` (from admissions page)
- `/policies/fees-policy.pdf` (from fees page)
- `/policies/privacy-policy.pdf` (if linked)

Either create these files or remove the links. Broken links before launch erode trust.

### 12. Transition component type mismatch

**File:** `src/components/Transition.svelte` (line 6)

```typescript
let { url }: { url: URL } = $props()
```

The prop receives `$page.url.pathname` which is a `string`, not a `URL` object. The type should be `string`:

```typescript
let { url }: { url: string } = $props()
```

### 13. Review services data for accuracy

**File:** `src/constants/index.ts` (lines ~200-285)

The 22 services listed include gymnasium, science laboratories, dining facilities, IT labs, sports fields, transport services, medical center, and more. For a small Grades 1-7 school, many of these are likely aspirational rather than currently available. Confirm which services actually exist and remove or mark the others as "planned" or "coming soon."

---

## Priority 3 — Code Quality & Polish

### 14. Navbar: remove Svelte store dependency

**File:** `src/components/Navbar.svelte`

The Navbar mixes runes (`$state`, `$derived`, `$effect`) with a legacy Svelte writable store for `showMobileDropdown`. The store in `src/lib/stores.ts` exists only for this one connection.

Replace the store subscription with a callback prop or lift the mobile dropdown state into the parent layout via context. This removes the last `svelte/store` usage outside of legacy components.

### 15. Hero: hardcoded localhost URL

**File:** `src/components/Hero.svelte`

The "Apply Now" button links to `http://localhost:5174/admissions/apply`. This should use the relative path `/admissions/apply` or be built from the site config.

### 16. Homepage load function: proper error handling

**File:** `src/routes/+page.ts` (lines 16-20)

```typescript
} catch (error) {
  console.error('Failed to load homepage data:', error);
  throw error;
}
```

Catching an error just to log and re-throw is redundant. Either:

- Remove the try/catch entirely and let it bubble naturally
- Or catch and return a fallback/error state so the page can render partial content

### 17. Events data: add current/future events

**File:** `src/lib/data/events.ts`

All 4 events have dates in the past (January-April 2026). By June 2026, visiting the homepage and seeing only past events looks outdated. Add current Term 3/4 events or restructure to show the upcoming term.

### 18. Newsletter: remove commented-out code

**File:** `src/components/Newsletter.svelte`

Large blocks of commented-out JS and CSS are present. Delete them — version control preserves history.

### 19. Footer: centralize hardcoded data

**File:** `src/components/Footer.svelte`

Contact info (phone, email, address, Facebook URL) is hardcoded directly in the template. This data is repeated in multiple files (Navbar, Contact page, Hero, Footer). Consider centralizing in `src/lib/config.ts` and importing everywhere.

### 20. Admissions apply page: remove hidden legacy field

**File:** `src/routes/admissions/apply/+page.svelte`

There's a hidden `learnerName` field (likely a honeypot or artifact). If it's a honeypot, it should have an accessible label explaining what it is (or be marked as `aria-hidden`). If it's dead code, remove it.

### 21. PageTitle: migrate SCSS to Tailwind

**File:** `src/components/PageTitle.svelte`

Uses `<style lang="scss">` with complex CSS. The SCSS dependency adds build weight for a single component. Migrate to Tailwind utility classes or a plain CSS block. The decorative elements should use Tailwind's `@apply` or inline utilities.

### 22. Hero video: loading state feedback

**File:** `src/components/Hero.svelte`

The video has event-based loading logic, but there's no visible loading indicator while the video loads. On slow connections, users see empty space. Add a placeholder background color or skeleton loader.

### 23. Accessibility: FAQ accordions

**File:** `src/routes/contact/+page.svelte`

The FAQ accordion buttons render answers that are hidden by default. Confirm that:

- Each button has `aria-expanded` that tracks open/closed state
- The answer content has `aria-labelledby` pointing to the question button
- Keyboard navigation works (Enter/Space to toggle)

---

## UI Polish Suggestions

These are subjective improvements for a more polished, professional feel.

### 24. Contact page: FAQ section spacing

On desktop, the contact page uses a two-column layout (form + FAQ sidebar). The FAQ section could benefit from:

- Slightly more vertical rhythm between question items
- A subtle visual separator or background tint to distinguish the FAQ column
- The "Ready to Join" CTA card feels disconnected from the FAQ section — consider tightening the visual grouping

### 25. Programs section: mobile card touch targets

On mobile, the program cards (Foundation/Intermediate/Senior Phase) work well but the "Learn More" links are text-only with no visible tap target expansion. Adding `min-h-[44px]` and `flex items-center` to these links would meet WCAG touch target guidelines (44x44px minimum).

### 26. Apply CTA: consistent styling

The "Apply Now" button on the homepage hero uses a green/gold gradient. The "Apply Now" link on the admissions page uses a different style. Consistent styling for the same action creates a more professional brand feel.

### 27. Fees table: mobile readability

The fee table on mobile could benefit from a stacked/card layout rather than horizontal scrolling. Consider a `@media (max-width: 640px)` breakpoint that switches from `<table>` to a definition-list or card-based layout.

### 28. Calendar: event card states

The calendar events show dates that have passed. Consider:

- Marking past events with a "past event" visual indicator (reduced opacity, "past" badge)
- Highlighting the next upcoming event
- Adding a "no upcoming events" empty state if none exist

### 29. Page transitions

The site uses view transitions (`sveltekit-view-transition`) and a custom Transition component. Between-page navigation works, but the animation on initial load can feel slightly jarring. Consider disabling the transition on the first visit (cold load) and only animating subsequent SPA navigations.

### 30. Footer copyright year

The footer shows "© 2026" hardcoded. Use `new Date().getFullYear()` to auto-update, or if the founding year is known, show a range (e.g., "© 2023–2026").

---

## Overall Assessment

The site is in good shape for a pre-launch state. The code is mostly clean, runes-compliant where it counts, and the content covers all the key pages a school needs. The critical issues (wrong domain in SEO metadata, grade listing conflict, Svelte 4 legacy syntax, bank account name) should be addressed before replacing the "Under Construction" landing page.

**Residual risk:** The FAQ answers are not visible in the snapshot — they may need content review. The PDF files referenced on multiple pages likely don't exist yet. The EmailOctopus newsletter integration and email sending (nodemailer) should be tested in a staging environment before production.
