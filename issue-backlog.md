
# Harding Christian Academy Website - GitHub Issue Drafts

## Project backlog

### Working conventions

#### Labels

P0 Must-have, P1 High, P2 Nice, P3 Show-off

type:page, type:form, type:infra, type:content, type:seo, type:a11y, type:security, type:enhancement

milestone:M0, milestone:M1, milestone:M2, milestone:M3

#### Definition of Done (DoD)

- Mobile-first layout passes basic checks (no overflow, readable type).
- Lighthouse (informal) looks reasonable: fast load, no obvious accessibility failures.
- No secrets in client bundles; env vars are server-only.
- Forms validate server-side and send correct emails.
- Basic SEO meta (title/description) per page.
- Content reviewed by school stakeholders.

#### Milestones overview (visual)

flowchart LR
  M0[M0: Foundation + Deploy] --> M1[M1: MVP Public Pages + Forms]
  M1 --> M2[M2: News + Calendar + Policies + Gallery]
  M2 --> M3[M3: Admin + Automation + Show-off]

## M0 — Foundation + Deploy (P0)

Issue: Initialise repo and SvelteKit project
Labels: P0 Must-have, type:infra, milestone:M0

Checklist

- Create repo (e.g. hca-website)
- Initialise SvelteKit 2 + Svelte 5 project (TypeScript)
- Add formatting (Prettier) + linting
- Set basic README with dev commands and deployment notes

Acceptance criteria

- npm run dev works locally
- npm run build succeeds without warnings that indicate misconfiguration
- Repo contains clear instructions for env vars and deployment

Issue: Hosting + deployment pipeline (zero-cost-first)
Labels: P0 Must-have, type:infra, milestone:M0

Scope (recommended)

- Default: Cloudflare Pages for “as close to zero cost as possible”
- Keep the code portable to Vercel if needed

Checklist

- Connect GitHub repo to hosting provider (Cloudflare Pages recommended)
- Configure build command and output as required by adapter
- Add environment variables placeholders (server-only)
- Confirm a staging URL loads

Acceptance criteria

- Every push to main deploys automatically
- Deployed site loads Home page successfully

Issue: Domain + DNS setup (Cloudflare recommended)
Labels: P0 Must-have, type:infra, milestone:M0

Checklist

- Purchase or transfer domain to preferred registrar
- Configure Cloudflare DNS (recommended) or provider DNS
- Add required records (A/AAAA/CNAME) for hosting provider
- Verify SSL/TLS settings and HTTPS works

Acceptance criteria

- Domain resolves to staging/production site
- HTTPS is valid with no certificate warnings

Issue: Global layout, navigation, footer
Labels: P0 Must-have, type:page, type:a11y, milestone:M0

Checklist

- Create +layout.svelte with header/nav/footer
- Add a consistent container width, spacing scale, typography
- Active nav state
- Footer includes address + phone + current year

Acceptance criteria

- Keyboard navigation works (tab through nav links)
- Layout is consistent across all routes
- No CLS-like “jumping” on page load

Issue: Baseline SEO + sitemap + robots
Labels: P0 Must-have, type:seo, milestone:M0

Checklist

- Per-page title + description (reasonable defaults)
- Add sitemap.xml (static is fine for MVP)
- Add robots.txt (allow indexing once ready)
- Add Open Graph defaults

Acceptance criteria

- Each page has a unique title/description
- robots.txt and sitemap.xml reachable in production

Issue: Collect and approve website content (copy, fees, policies, term dates)
Labels: P0 Must-have, type:content, milestone:M0

Checklist

- Gather approved copy for each page (Home, About, Academics, Admissions, Fees, Contact)
- Collect fee structure and payment notes
- Collect policies and downloadable documents (if available)
- Gather term dates/events for calendar content

Acceptance criteria

- Stakeholders sign off on page copy and data
- Content assets are ready for implementation

## M1 — MVP Public Pages + Forms (P0)

Issue: Home page
Labels: P0 Must-have, type:page, milestone:M1

Content

- Welcome + concise overview
- Quick links tiles: Admissions, Academics, Fees, Contact
- Highlight: “Visit the school for admissions forms/information”
- Optional “Under construction” banner removed once MVP is live

Acceptance criteria

- Clear primary CTA to Admissions + Contact
- Reads well on mobile without heavy scrolling

Issue: About page
Labels: P0 Must-have, type:page, milestone:M1

Content

- Mission/vision/ethos
- Brief school profile
- Leadership mention (Principal)

Acceptance criteria

- Content structured with headings and short sections
- No placeholder copy

Issue: Academics page
Labels: P0 Must-have, type:page, milestone:M1

Content

- Grades offered
- Curriculum overview
- Optional: extra-murals/enrichment

Acceptance criteria

- Answers “what do you offer?” within 15 seconds of scanning
- Clear link to Admissions

Issue: Admissions page
Labels: P0 Must-have, type:page, milestone:M1

Content

- Step-by-step admissions process
- Checklist
- “Visit school for forms” (initially)
- Link to Admissions Enquiry form
- Add the Admissions Enquiry form to this page once the form issue is done

Acceptance criteria

- Clear admissions steps and requirements
- Visible CTA to Admissions Enquiry form

Issue: Fees page
Labels: P0 Must-have, type:page, milestone:M1

Content

- Fee structure (table)
- Payment notes (without sensitive details if preferred)
- Downloadable fee letter (Phase 2 if needed)

Acceptance criteria

- Fees are easy to understand and printable
- Clear “Contact for clarification” prompt

Issue: Contact page (with map link)
Labels: P0 Must-have, type:page, milestone:M1

Content

- Address: 9 Philip Street, Harding
- Principal number: 072 248 6965
- Office hours (if you want public)
- Google Maps “Directions” link

Acceptance criteria

- Phone and map links work on mobile
- Contact details are prominent and copyable

Issue: Privacy notice (POPIA-ready) + consent language
Labels: P0 Must-have, type:content, type:security, milestone:M1

Checklist

- Add /privacy page explaining data handling for forms
- Add consent checkbox text used on all forms
- Define retention policy (simple: email is primary storage unless DB is enabled)

Acceptance criteria

- Every form includes a required consent checkbox
- Privacy page is linked from footer

Issue: General Enquiry form (emails admin/info)
Labels: P0 Must-have, type:form, type:security, type:a11y, milestone:M1

Fields

- Name, phone, email (email optional if you want), message, topic dropdown
- Consent checkbox

Checklist

- Server-side validation (Zod)
- Spam protection: honeypot + rate limit (simple) and optionally Turnstile
- Email notification to info/admin inbox
- Success message + reference ID

Acceptance criteria

- Invalid submissions return field-level errors without crashing
- Valid submission sends an email with all form details
- Works without JS (progressive enhancement)

Issue: Admissions Enquiry form (emails admissions)
Labels: P0 Must-have, type:form, type:security, type:a11y, milestone:M1

Fields

- Parent name + contact
- Learner name
- Grade applying for
- Current school (optional)
- Message/questions
- Consent checkbox

Acceptance criteria

- Same form guarantees as General Enquiry
- Subject line clearly indicates “Admissions Enquiry” + grade

## M2 — News + Calendar + Policies + Gallery (P1/P2)

Issue: News / Announcements listing + post pages (Markdown-based)
Labels: P1 High, type:page, milestone:M2

Checklist

- Posts stored as Markdown in repo
- /news listing with dates + tags
- /news/[slug] page rendering Markdown safely

Acceptance criteria

- Non-technical staff can add a post by editing one file + commit
- Posts load quickly and are shareable

Issue: Calendar / Events page (simple list first)
Labels: P1 High, type:page, milestone:M2

Checklist

- Store events as JSON/TS file initially
- Filter “upcoming” vs “past”
- Optional: term dates section

Acceptance criteria

- Parents can quickly see what’s next
- Events are easy to edit without a database

Issue: Policies page + downloadable documents
Labels: P1 High, type:page, milestone:M2

Checklist

- List policies with short summaries
- Provide PDF downloads (static assets)

Acceptance criteria

- All downloads work and are clearly labelled
- PDFs open on mobile without weird routing issues

Issue: Gallery page (optimised images)
Labels: P2 Nice, type:page, milestone:M2

Checklist

- Curated albums (by event/term)
- Compressed images + lazy loading
- Basic lightbox (optional)

Acceptance criteria

- Page remains fast; no massive unoptimised images
- Works well on mobile data

## M3 — Admin + Automation + “Show-off” (P2/P3)

Issue: Store form submissions in Xata (optional)
Labels: P2 Nice, type:infra, type:security, milestone:M3

Notes

- Email remains primary workflow; DB is for tracking/export
- Keep it optional so the website still works without DB

Acceptance criteria

- If DB enabled: submissions stored with timestamps + status
- If DB disabled: email sending still works

Issue: Admin dashboard (protected) for viewing submissions
Labels: P3 Show-off, type:page, type:security, milestone:M3

Acceptance criteria

- Basic auth / secure access (no client-side “security theatre”)
- View list + export CSV

Issue: Newsletter integration (EmailOctopus)
Labels: P2 Nice, type:form, milestone:M3

Acceptance criteria

- Newsletter signup embedded on Home or News page
- Double opt-in if desired
- Confirmations routed correctly

Issue: Advanced UX enhancements
Labels: P3 Show-off, type:enhancement, milestone:M3

Scope ideas

- PWA, push notifications, search, multi-language, etc.

Acceptance criteria

- At least one advanced UX enhancement implemented and documented

## Recommended initial tech stack (implementation target)

- SvelteKit 2 + Svelte 5 (TypeScript)
- Adapter: Cloudflare Pages (zero-cost-first), or Vercel if you choose
- Validation: Zod (server-side)
- Email for forms: Resend (free tier) with server-side calls only
- Spam control: Turnstile + honeypot + simple throttling
- Content: Markdown-in-repo for News; JSON/TS for Events
- DB (optional): Xata for submissions tracking
