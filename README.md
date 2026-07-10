# ArtistOS

A production-grade, multi-tenant SaaS operating system for an artist's career and creative
output. See [docs/PRODUCT.md](docs/PRODUCT.md) for the full product context and
[docs/VISION.md](docs/VISION.md) for the long-term direction.

> **Status:** Sprint 1 — application shell only. UI and navigation are built with placeholder
> data; there is no backend, authentication, or database yet. Supabase integration lands in
> Sprint 2.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, React Server Components)
- [React 19](https://react.dev)
- TypeScript (strict)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- ESLint (flat config) + Prettier

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/dashboard`.

Other scripts:

```bash
npm run build         # production build
npm run lint           # ESLint
npm run format          # Prettier --write
npm run format:check    # Prettier --check
```

## Application Shell

The shell is a fixed six-section navigation, all backed by placeholder data in
`src/lib/placeholder-data/`:

| Page      | Route        | Purpose                                          |
| --------- | ------------ | ------------------------------------------------ |
| Dashboard | `/dashboard` | Workspace overview: stats + recent activity      |
| Artists   | `/artists`   | Artist profiles                                  |
| Songs     | `/songs`     | Tracks and their release-pipeline status         |
| Media     | `/media`     | Cover art, photos, video, audio files            |
| Studio    | `/studio`    | Storyboards and saved/generated AI prompts       |
| Settings  | `/settings`  | Profile, appearance, organization, notifications |

Shared shell components (`src/components/layout/`): responsive sidebar, top header with
breadcrumbs, page header, command palette (⌘K / Ctrl+K), theme toggle (dark by default),
notifications placeholder, and a user menu placeholder. None of the action buttons that would
require a backend are wired up yet — they're disabled with a tooltip explaining they arrive in
Sprint 2.

## Folder Structure

```
src/
├── app/(app)/           # routes for the six shell pages, wrapped by the shell layout
├── components/
│   ├── ui/               # shadcn/ui primitives (generated, not hand-edited)
│   └── layout/            # sidebar, header, page header, command palette, notifications
├── config/nav.ts          # single source of truth for navigation items
└── lib/placeholder-data/  # mock data consumed by each page until Supabase lands
```

See [docs/architecture/overview.md](docs/architecture/overview.md) for the target architecture (multi-tenancy,
Clean Architecture module layout, data access boundary) that the rest of the build follows.

## Documentation

- [docs/PRODUCT.md](docs/PRODUCT.md) — product definition and pillars
- [docs/VISION.md](docs/VISION.md) — long-term direction
- [docs/PRINCIPLES.md](docs/PRINCIPLES.md) — product & engineering principles
- [docs/ROADMAP.md](docs/ROADMAP.md) — MVP → v2 → v3 plan
- [docs/architecture/](docs/architecture/) — system architecture, module structure, AI Gateway,
  Workflow Engine, Plugin System
- [docs/product/](docs/product/) — per-pillar product deep-dives
- [docs/adr/](docs/adr/) — architecture decision records
- [docs/DATABASE.md](docs/DATABASE.md) — data model proposal
- [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) — UI/UX standards
- [docs/CODING_STANDARDS.md](docs/CODING_STANDARDS.md) — engineering conventions
