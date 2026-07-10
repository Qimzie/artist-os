# ArtistOS — Principles

> Status: Draft. These are the rules that should resolve product and architecture disagreements.
> When a decision is hard to make, it should be checkable against this list.
> Last updated: 2026-07-10.

## Product Principles

1. **Artist-owned data.** Everything an artist puts into the Artist Bible, Creative Memory, or
   Release Workspace belongs to them and must be exportable. ArtistOS earns retention through
   value, not lock-in.
2. **AI-augmented, not AI-replaced.** Generation is a tool the artist directs, grounded in their
   own Artist Bible — never an autonomous "make content for you" black box. The artist approves
   what ships.
3. **Context compounds.** Every interaction with the Prompt Builder should make future generations
   better, via Creative Memory — a stateless prompt box is a fallback, not the product.
4. **One canonical source per concept.** An artist's bio, style, and catalog exist once (in the
   Artist Bible / Release Workspace) and are referenced everywhere else, not copy-pasted.
5. **Provider-agnostic by design.** No feature should hard-depend on one AI model provider — see
   [architecture/ai-gateway.md](./architecture/ai-gateway.md).

## Engineering Principles

These extend, not replace, [CODING_STANDARDS.md](./CODING_STANDARDS.md).

1. **Don't add abstractions ahead of a second real use case.** The
   [module structure](./architecture/modules.md) and the
   [Plugin System](./architecture/plugin-system.md) exist because we anticipate real reuse
   (multiple AI providers, multiple workflow types) — not speculatively.
2. **Every AI Gateway call is auditable.** Cost, provider, prompt, and output are logged — this is
   a product requirement (Creative Memory) as much as an engineering one.
3. **Placeholder-first for new pillars.** New product pillars (as with the application shell) ship
   UI with placeholder data before backend integration, so UX gets validated before it gets built.
4. **Multi-tenant and RLS-enforced from day one.** See
   [architecture/overview.md](./architecture/overview.md) — this is not retrofitted later.
5. **A decision that changes direction gets an ADR.** See [adr/](./adr/) — significant,
   hard-to-reverse architecture decisions are recorded with context and consequences, not just
   made silently in code.

## Related Documents

- [VISION.md](./VISION.md)
- [PRODUCT.md](./PRODUCT.md)
- [CODING_STANDARDS.md](./CODING_STANDARDS.md)
- [adr/](./adr/)
