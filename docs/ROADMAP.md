# ArtistOS — Roadmap

> Status: Directional, not scheduled. No dates are committed yet.
> Organized around the pillars and invisible capabilities in [PRODUCT.md](./PRODUCT.md) §3.
> Last updated: 2026-07-10.

This roadmap sequences scope, not calendar time. Each phase should be fully functional and
shippable before the next begins — no half-finished features carried forward.

## Shipped — Application Shell

- [x] Navigation shell: Dashboard, Artists, Songs, Media, Studio, Settings
- [x] Responsive sidebar, top header, breadcrumbs, command palette, theme toggle (dark default),
      notifications and user menu placeholders
- [x] All pages backed by placeholder data — no backend yet

## Phase 1 — Release Workspace (backend)

Goal: make the already-built Songs/Media UI real, plus the tenancy backbone everything else
depends on.

- [ ] Auth, organizations, membership/roles (Supabase)
- [ ] Songs and Media backed by real tables + RLS — see [DATABASE.md](./DATABASE.md)
- [ ] Artists as real records under an organization
- [ ] File upload (Supabase Storage) for cover art / media

## Phase 2 — Artist Bible

Goal: give the AI Gateway something real to ground generations in.

- [ ] Artist Bible data model: bio, sonic identity, visual language, reference links, do's/don'ts
- [ ] Artist Bible editor UI
- [ ] Bible content surfaced to Studio's Prompt Builder as generation context

## Phase 3 — AI Gateway + Prompt Builder (real generation)

Goal: turn the placeholder "Generate" button into a real, provider-agnostic generation path.
The AI Gateway itself is invisible to the user — this phase is felt as "Generate now works."

- [ ] [AI Gateway](./architecture/ai-gateway.md): unified interface over image/video/audio/text
      providers, cost + usage logging
- [ ] Studio's Prompt Builder wired to the AI Gateway, grounded in Artist Bible context
- [ ] Generation history persisted (first slice of Creative Memory)

## Phase 4 — Creative Memory

Goal: make generations improve over time instead of being stateless per-request. Also invisible
to the user — no dedicated UI, just better output over time.

- [ ] Structured feedback loop (kept vs. discarded generations, edits made)
- [ ] [Creative Memory](./architecture/creative-memory.md) retrieval feeding back into Prompt
      Builder context
- [ ] Storyboards as a Creative-Memory-aware workflow (sequenced generations, not one-offs)

## Phase 5 — Workflow Engine + Plugin System

Goal: move from single generations to composable, multi-step creative workflows, and open the
platform to extension.

- [ ] [Workflow Engine](./architecture/workflow-engine.md): chained generation steps (e.g.
      storyboard → per-scene image → video → assemble)
- [ ] [Plugin System](./architecture/plugin-system.md): internal extensibility for new providers
      and workflow steps first, external/third-party later

## v2 / v3 — Beyond the Core Pillars

Deferred until the pillars and capabilities above are solid:

- [ ] Finance & royalties: income/expense tracking, splits, invoicing
- [ ] Billing & subscriptions (Stripe), plan-gated features
- [ ] Booking & tour management
- [ ] Rights & contract management
- [ ] Fan/audience CRM + campaigns
- [ ] Public API + third-party plugin marketplace
- [ ] Label/agency rollup reporting across multiple artists in one org

## Explicitly Deferred / Not Planned

> TODO: revisit as the product matures.

- Native mobile apps
- White-label / multi-brand support
- On-premise / self-hosted deployment

## Related Documents

- [PRODUCT.md](./PRODUCT.md)
- [VISION.md](./VISION.md)
- [architecture/overview.md](./architecture/overview.md)
