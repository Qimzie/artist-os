# Architecture — Overview

> Status: Foundational — describes the target architecture. Supersedes the earlier top-level
> `ARCHITECTURE.md`. Update this document whenever an architectural decision changes; it should
> always reflect current reality, not just intent.
> Last updated: 2026-07-10.

## 1. Stack

| Layer                | Choice                               | Notes                                                                     |
| -------------------- | ------------------------------------ | ------------------------------------------------------------------------- |
| Framework            | Next.js 16 (App Router, RSC-first)   |                                                                           |
| UI                   | React 19, Tailwind CSS v4, shadcn/ui | shadcn components are copied into the repo, not installed as a dependency |
| Language             | TypeScript (strict mode)             |                                                                           |
| Backend / DB         | Supabase (PostgreSQL, Auth, Storage) | Row Level Security is the primary authorization mechanism                 |
| AI                   | [AI Gateway](./ai-gateway.md)        | Provider-agnostic abstraction over image/video/audio/text generation      |
| Linting / Formatting | ESLint (flat config), Prettier       |                                                                           |
| Package manager      | npm                                  |                                                                           |
| Hosting              | TODO                                 | Vercel is the natural fit for Next.js; confirm before launch              |
| CI/CD                | TODO                                 | Not yet configured                                                        |

## 2. System Components

ArtistOS is a Next.js application backed by Supabase, with three subsystems that support the AI
product pillars in [PRODUCT.md](../PRODUCT.md):

```
┌─────────────────────────────────────────────────────────┐
│  Next.js App (App Router)                                │
│  Release Workspace UI · Artist Bible UI · Studio (Prompt Builder) UI│
└───────────────┬─────────────────────┬────────────────────┘
                │                     │
                ▼                     ▼
     ┌────────────────────┐   ┌─────────────────────────┐
     │  Supabase           │   │  AI Gateway               │
     │  Postgres / Auth /   │   │  (see ai-gateway.md)      │
     │  Storage / RLS       │   └──────────┬────────────────┘
     └────────────────────┘              │
                                          ▼
                              ┌──────────────────────────┐
                              │  Workflow Engine           │
                              │  (see workflow-engine.md)  │
                              └──────────────────────────┘
                                          │
                                          ▼
                              ┌──────────────────────────┐
                              │  Plugin System              │
                              │  (see plugin-system.md)     │
                              └──────────────────────────┘
```

> TODO: none of the AI Gateway, Workflow Engine, or Plugin System exist yet — see
> [ROADMAP.md](../ROADMAP.md) for sequencing. This diagram is the target shape, not current state.

## 3. Application Shape

A single Next.js application — deliberately **not** a monorepo. A monorepo earns its cost once
there are multiple real deployables. The [module structure](./modules.md) gives most of the
isolation benefit without the tooling overhead, and can be extracted into packages later if a
second deployable actually appears.

## 4. Module Architecture

See [modules.md](./modules.md) for the full detail. In short: each feature module
(`src/modules/<feature>/`) is a vertical slice with `domain` / `application` / `infrastructure` /
`presentation` layers, applied strictly where business rules are non-trivial and loosely for thin
CRUD.

## 5. Multi-Tenancy

- **Model**: shared database, shared schema. Every tenant-owned table carries `org_id`. Isolation
  is enforced by **Postgres Row Level Security**, not application-layer filtering alone.
- An organization can own multiple `artists` — covers both a solo artist and a label/management
  company under one schema shape. See [DATABASE.md](../DATABASE.md).

## 6. Auth

- Supabase Auth via `@supabase/ssr`. Two distinct Supabase client instances (browser, server/RSC)
  — never shared across that boundary. See [DATABASE.md](../DATABASE.md) for the RLS pattern.

## 7. Data Access Boundary

- RSCs and Server Actions call `application`-layer use-cases directly — no internal REST
  round-trip for first-party UI.
- `src/app/api/` route handlers are reserved for webhooks and future external/public API
  consumers.
- All AI generation calls go through the [AI Gateway](./ai-gateway.md) — no feature calls a model
  provider's SDK directly.

## 8. Theming & Responsiveness

Dark mode by default via `next-themes`, Tailwind v4 `@theme` tokens as the single source of design
values. Mobile-first by Tailwind convention. See [DESIGN_SYSTEM.md](../DESIGN_SYSTEM.md).

## 9. Observability & Operations

> TODO: Define logging, error tracking, and uptime monitoring before first production deploy. AI
> Gateway calls specifically need cost/usage observability — see
> [PRINCIPLES.md](../PRINCIPLES.md) §Engineering Principles.

## 10. Related Documents

- [modules.md](./modules.md)
- [ai-gateway.md](./ai-gateway.md)
- [workflow-engine.md](./workflow-engine.md)
- [plugin-system.md](./plugin-system.md)
- [../DATABASE.md](../DATABASE.md)
- [../DESIGN_SYSTEM.md](../DESIGN_SYSTEM.md)
- [../CODING_STANDARDS.md](../CODING_STANDARDS.md)
- [../adr/](../adr/)
