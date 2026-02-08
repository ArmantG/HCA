# DECISIONS.md — Architecture & Decision Log (ADR-lite)

This file records the important “why” behind technical choices in this repo.
Keep entries short, factual, and easy to scan. Prefer stable, well-documented conventions.

**Rules**
- One decision per section.
- Write decisions as if a new teammate will read them 6 months later.
- Include links to relevant docs/issues/PRs.
- Update a decision with a new entry (don’t rewrite history).
- If a decision is reversed, add a new entry that supersedes the old one.

---

## Template (copy this block for each decision)

### ADR-YYYY-MM-DD-###: <Decision title>
**Status:** Proposed | Accepted | Deprecated | Superseded  
**Date:** YYYY-MM-DD  
**Owners:** @name(s)  
**Context:**  
What problem are we solving? What constraints (cost, hosting, team skill, deadlines) matter?

**Decision:**  
What did we choose? Be concrete (tools, patterns, folder paths, conventions).

**Rationale:**  
Why this choice? What trade-offs are we accepting?

**Alternatives considered:**  
- Option A — why not
- Option B — why not

**Consequences:**  
What changes because of this? What do we need to be careful about?

**Implementation notes:**  
Key files/paths, migration steps, commands, guardrails.

**Links:**  
- Issue/PR:
- Docs:
- Notes:

---

## Decisions

### ADR-YYYY-MM-DD-001: Stack baseline — SvelteKit 2 + Svelte 5 (Runes)
**Status:** Accepted  
**Date:** YYYY-MM-DD  
**Owners:**  
**Context:**  
**Decision:**  
**Rationale:**  
**Alternatives considered:**  
**Consequences:**  
**Implementation notes:**  
**Links:**  

---

### ADR-YYYY-MM-DD-002: Styling — Tailwind CSS
**Status:** Accepted  
**Date:** YYYY-MM-DD  
**Owners:**  
**Context:**  
**Decision:**  
**Rationale:**  
**Alternatives considered:**  
**Consequences:**  
**Implementation notes:**  
**Links:**  

---

### ADR-YYYY-MM-DD-003: Data — Xata as DB provider (Postgres platform)
**Status:** Accepted  
**Date:** YYYY-MM-DD  
**Owners:**  
**Context:**  
**Decision:**  
**Rationale:**  
**Alternatives considered:**  
**Consequences:**  
**Implementation notes:**  
**Links:**  

---

### ADR-YYYY-MM-DD-004: Mutations — SvelteKit form actions + progressive enhancement
**Status:** Accepted  
**Date:** YYYY-MM-DD  
**Owners:**  
**Context:**  
**Decision:**  
**Rationale:**  
**Alternatives considered:**  
**Consequences:**  
**Implementation notes:**  
**Links:**  

---

### ADR-YYYY-MM-DD-005: Validation — Zod server-side for all untrusted input
**Status:** Accepted  
**Date:** YYYY-MM-DD  
**Owners:**  
**Context:**  
**Decision:**  
**Rationale:**  
**Alternatives considered:**  
**Consequences:**  
**Implementation notes:**  
**Links:**  

---

### ADR-YYYY-MM-DD-006: Deployment — <adapter-name> (e.g., adapter-node / adapter-vercel)
**Status:** Proposed  
**Date:** YYYY-MM-DD  
**Owners:**  
**Context:**  
**Decision:**  
**Rationale:**  
**Alternatives considered:**  
**Consequences:**  
**Implementation notes:**  
**Links:**  

---

### ADR-YYYY-MM-DD-007: Auth strategy — <sessions/cookies or provider>
**Status:** Proposed  
**Date:** YYYY-MM-DD  
**Owners:**  
**Context:**  
**Decision:**  
**Rationale:**  
**Alternatives considered:**  
**Consequences:**  
**Implementation notes:**  
**Links:**  

---

### ADR-YYYY-MM-DD-008: Observability — logging + error tracking
**Status:** Proposed  
**Date:** YYYY-MM-DD  
**Owners:**  
**Context:**  
**Decision:**  
**Rationale:**  
**Alternatives considered:**  
**Consequences:**  
**Implementation notes:**  
**Links:**  

---

## Superseded / Deprecated decisions

(When a decision is replaced, add the new ADR above and reference it here.)

- ADR-YYYY-MM-DD-###: <Old decision title> — **Superseded by:** ADR-YYYY-MM-DD-###
