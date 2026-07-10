# Architecture — Module Structure

> Status: Foundational. Expands on [overview.md](./overview.md) §4.
> Last updated: 2026-07-10.

## 1. Principle

Full ports-and-adapters layering on every CRUD screen is unnecessary ceremony. ArtistOS applies
Clean Architecture principles **where business rules are non-trivial**, and allows thinner
layering elsewhere — see [PRINCIPLES.md](../PRINCIPLES.md) §Engineering Principles.

## 2. Layout

Each feature module (`src/modules/<feature>/`) is a vertical slice with up to four layers:

- `domain/` — entities, types, invariants. No framework or Supabase imports. Pure, testable
  TypeScript.
- `application/` — use-cases and orchestration. Defines repository _interfaces_ consumed by
  `domain`/`presentation`.
- `infrastructure/` — concrete implementations of those interfaces (Supabase queries, storage
  calls, AI Gateway calls, external APIs).
- `presentation/` — feature-specific UI, hooks, and server actions.

The strict four-layer split is **required** for modules with real business rules. For thin CRUD
modules, `application` and `infrastructure` may collapse into a single typed data-access file.

## 3. Module Map (Target)

| Module           | Layering                            | Notes                                                                                                                           |
| ---------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `organizations`  | Strict (all 4 layers)               | Tenancy — real invariants (roles, membership)                                                                                   |
| `artists`        | Thin                                | Mostly CRUD today; may need strict layering once Artist Bible logic lands                                                       |
| `songs`          | Thin                                | Release Workspace pillar                                                                                                        |
| `media`          | Thin                                | Release Workspace pillar                                                                                                        |
| `artist-bible`   | Strict                              | TODO — not built yet; see [product/artist-bible.md](../product/artist-bible.md)                                                 |
| `prompt-builder` | Strict                              | TODO — powers the Studio UI; orchestrates AI Gateway calls, has real business rules. Internal name only — never shown to users. |
| `auth`           | Thin (mostly Supabase Auth wrapper) |                                                                                                                                 |

Cross-cutting services — invisible to the user, consumed by the modules above rather than having
their own UI:

| Service           | Layering | Notes                                                                                                       |
| ----------------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| `ai-gateway`      | Strict   | Not a product module — a shared service. See [ai-gateway.md](./ai-gateway.md)                               |
| `creative-memory` | Strict   | TODO — retrieval/ranking logic is non-trivial by definition. See [creative-memory.md](./creative-memory.md) |
| `workflow-engine` | Strict   | TODO — see [workflow-engine.md](./workflow-engine.md)                                                       |

> TODO: this table is a proposal. Only `organizations`-shaped tenancy exists in code today; the
> rest are named here so future modules land in a consistent place.

## 4. Cross-Cutting Services vs. Product Modules

`ai-gateway` and `workflow-engine` are **not** product modules with their own UI pages — they're
shared services other modules call into (mainly from their `infrastructure` or `application`
layers). Keep them under `src/lib/` or a dedicated `src/services/` root, not `src/modules/`, to
signal that distinction.

> TODO: confirm final location (`src/lib/ai-gateway/` vs `src/services/ai-gateway/`) when the AI
> Gateway is actually built.

## 5. Related Documents

- [overview.md](./overview.md)
- [ai-gateway.md](./ai-gateway.md)
- [../CODING_STANDARDS.md](../CODING_STANDARDS.md)
