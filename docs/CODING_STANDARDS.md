# ArtistOS — Coding Standards

> Status: Foundational conventions for a project at initialization. Amend as
> real patterns emerge — do not let this drift from actual practice.
> Last updated: 2026-07-10.

## 1. Language & Types

- TypeScript strict mode is on; do not weaken `tsconfig.json` strictness to
  silence errors — fix the type.
- No `any` without a comment explaining why it's unavoidable. Prefer `unknown`
  at boundaries and narrow explicitly.
- Shared types live in `src/types/`; feature-specific types live in that
  feature's `src/modules/<feature>/domain/`.

## 2. Folder & Module Conventions

- Follow the structure in [architecture/modules.md](./architecture/modules.md). If code is
  reused across ≥2 features or has no business logic, it belongs in
  `lib/`/`components/`; if it belongs to one feature's behavior, it belongs in
  that feature's `modules/<feature>/`.
- `src/app/` contains routing only — pages/layouts should be thin and
  delegate to `modules/*/presentation`, not contain business logic directly.
- Within a module, respect the `domain` → `application` → `infrastructure`
  dependency direction. `domain` must never import from `infrastructure` or
  Next.js/Supabase packages.

## 3. Component Conventions

- Server Components by default; add `"use client"` only when a component
  needs interactivity, browser APIs, or hooks that require it.
- Co-locate a component's styles as Tailwind classes; no separate CSS files
  per component.
- shadcn/ui primitives in `components/ui/` are generated — do not hand-edit
  them beyond what the shadcn CLI produces; wrap/compose instead of forking.

## 4. Data Access

- RSCs/Server Actions call `application`-layer use-cases — never call
  Supabase directly from a page/component when a module boundary exists.
- Two Supabase clients only: browser (`lib/supabase/client.ts`) and
  server/RSC (`lib/supabase/server.ts`). Never use the server client in a
  Client Component or vice versa.
- All user input is validated with `zod` at the boundary (Server Action /
  route handler) before it reaches application logic.

## 5. Error Handling

- Validate and handle errors at system boundaries (user input, external
  APIs, Supabase responses). Do not add defensive checks for states that
  cannot occur given TypeScript's guarantees.
- Server Actions return typed result objects (`{ ok: true, data } | { ok:
false, error }`) rather than throwing across the client/server boundary.
- No silent failures — surface errors to the user or log them; never swallow
  a caught error with an empty `catch`.

## 6. Linting & Formatting

- ESLint (flat config, `eslint-config-next`) is the source of truth for code
  quality rules; do not disable a rule inline without a comment explaining
  why.
- TODO: add Prettier + `eslint-config-prettier` and a `.prettierrc` once
  formatting conventions are finalized — not yet configured in this
  foundation-only init.
- Run `npm run lint` before opening a PR.

## 7. Naming

- Files: `kebab-case.ts` for modules/utilities, `PascalCase.tsx` for React
  components.
- Directories: `kebab-case`.
- React components, types, and enums: `PascalCase`. Variables and functions:
  `camelCase`. Database columns/tables: `snake_case` (Postgres convention).

## 8. Git & Commits

> TODO: adopt and document a commit convention (e.g. Conventional Commits)
> and branch naming scheme before the team grows beyond a single contributor.

## 9. Testing

> TODO: no test framework is configured yet (deliberately — added when the
> first test is written, not speculatively). When introduced, document the
> chosen framework (likely Vitest for unit/integration, Playwright for e2e)
> and coverage expectations here.

## 10. Don'ts

- Don't add abstractions, config options, or feature flags for hypothetical
  future requirements — see [architecture/modules.md](./architecture/modules.md) on
  selective Clean Architecture.
- Don't introduce a new dependency for something a few lines of code can do.
- Don't bypass Row Level Security with the `service_role` key outside of
  trusted server-only contexts (e.g. admin tooling, webhooks) — see
  [DATABASE.md](./DATABASE.md).

## 11. Related Documents

- [architecture/overview.md](./architecture/overview.md)
- [DATABASE.md](./DATABASE.md)
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
