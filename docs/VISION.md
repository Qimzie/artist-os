# ArtistOS — Vision

> Status: Draft — directional, not committed roadmap. See [ROADMAP.md](./ROADMAP.md) for what is
> actually being built and when.
> Last updated: 2026-07-10.

## 1. The Belief

Generative AI is becoming a normal part of how music and visual content get made, but today it's
disconnected from an artist's actual body of work: every prompt starts from zero, every tool has
to be told who the artist is and what they sound/look like, and nothing an AI generates is
remembered or refined over time. ArtistOS exists on the belief that the winning tool is not "the
best model" but the platform that **accumulates context about a specific artist** and routes that
context into whichever model is right for the job.

## 2. Where We're Going

In the long run, ArtistOS should be the place an artist:

- Keeps a living, structured record of who they are creatively (the
  [Artist Bible](./product/artist-bible.md)) — bio, sonic identity, visual language, references,
  do's/don'ts.
- Plans and tracks every release (the [Release Workspace](./product/release-workspace.md)) without
  leaving the platform to manage assets, tasks, or status.
- Generates on-brand assets — cover art, storyboards, video, copy — through
  [Studio](./product/prompt-builder.md) (its internal Prompt Builder) that is grounded in the
  Artist Bible and gets better over time via [Creative Memory](./architecture/creative-memory.md)
  (invisible to the user), instead of generic, stateless prompting.
- Extends the platform itself, over time, via a [Plugin System](./architecture/plugin-system.md) —
  new AI providers, new workflow steps, new integrations — without ArtistOS having to build
  everything itself.

> TODO: This is a directional narrative, not a committed feature list. Revisit and sharpen once
> the Release Workspace pillar (already in build) has real user feedback.

## 3. What Success Looks Like (3–5 Years)

> TODO: Fill in with concrete, falsifiable statements once the business has enough signal, e.g.:
>
> - X% of an artist's release-related generation happens inside ArtistOS rather than a generic
>   tool, because the output is measurably more on-brand.
> - The Artist Bible + Creative Memory data model is valuable enough that switching away from
>   ArtistOS has real switching cost — in the artist's favor, since they own that data.

## 4. What This Vision Explicitly Rejects

- Being "yet another generic AI content generator" with no memory of the artist between sessions.
- Building every AI capability in-house — the [AI Gateway](./architecture/ai-gateway.md) exists
  specifically so ArtistOS can integrate best-in-class external models rather than compete with
  them.
- Locking artist data (bio, style, catalog, generated assets) into a format they can't take with
  them — see [PRINCIPLES.md](./PRINCIPLES.md).

## 5. Related Documents

- [PRODUCT.md](./PRODUCT.md) — current product definition
- [PRINCIPLES.md](./PRINCIPLES.md) — the rules that keep execution honest to this vision
- [adr/ADR-0001-platform-vision.md](./adr/ADR-0001-platform-vision.md) — the decision record for
  committing to this direction
