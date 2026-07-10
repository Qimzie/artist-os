# ADR-0001: Commit to an AI-Native Platform Vision

> Status: Accepted
> Date: 2026-07-10

## Context

ArtistOS began as a release/project-management tool for artists (see the original `PRD.md`,
retired by this restructuring). The application shell that shipped first (Dashboard, Artists,
Songs, Media, Studio, Settings) already included a Studio surface with Storyboards and a Prompt
Builder, which implied more than plain CRUD project management. This ADR formalizes that the
platform's actual direction is broader: an AI-native operating system built around three
user-facing pillars — Release Workspace, Artist Bible, and Studio (Prompt Builder) — powered by two
capabilities the user never sees, the AI Gateway and Creative Memory.

## Decision

ArtistOS is scoped and architected around the vision in [VISION.md](../VISION.md): a platform
whose core differentiation is accumulating persistent, structured context about a specific artist
(the Artist Bible and Creative Memory) and using that context to make AI generation
(via Studio's Prompt Builder and the AI Gateway) meaningfully better than stateless prompting
elsewhere.

This supersedes the earlier, narrower framing where AI generation was one feature among several
release-management features.

## Consequences

- Documentation is restructured around product pillars (see [PRODUCT.md](../PRODUCT.md)) instead
  of a flat feature list.
- The Release Workspace pillar (Songs/Media, already shipped as UI) remains the sequencing
  priority — it is not deprioritized by this vision shift, since Artist Bible and Creative Memory
  both need real release/artist data to be useful. See [ROADMAP.md](../ROADMAP.md).
- New architectural components are required that did not exist in the original plan: the
  [AI Gateway](../architecture/ai-gateway.md), [Workflow Engine](../architecture/workflow-engine.md),
  and [Plugin System](../architecture/plugin-system.md). Each has its own ADR/doc and is explicitly
  sequenced after the core Release Workspace backend, not built speculatively ahead of it.
- The original `PRD.md` and `ARCHITECTURE.md` are retired in favor of this structure to avoid two
  competing sources of truth.

## Alternatives Considered

- **Stay a narrower release-management tool, treat Studio as a minor feature.** Rejected — the
  shipped UI and the introduction of Storyboards/Prompt Builder as a top-level nav item already
  signaled AI generation is core, not peripheral. Formalizing it now avoids architecture decisions
  made piecemeal without a stated vision.
