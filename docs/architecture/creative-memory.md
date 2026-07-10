# Architecture — Creative Memory

> Status: Proposal — not implemented. See [ROADMAP.md](../ROADMAP.md) Phase 4.
> **Creative Memory has no user-facing name and no UI surface of its own — it is entirely
> invisible to the end user**, the same way the [AI Gateway](./ai-gateway.md) is. Users simply
> notice that [Studio](../product/prompt-builder.md) gets better over time; they never see a
> "Creative Memory" screen or setting.
> Last updated: 2026-07-10.

## 1. What It Is

Creative Memory is durable context accumulated from an artist's actual generation history —
what was generated, what was kept vs. discarded, what was edited after generation — that feeds
back into future [Prompt Builder](../product/prompt-builder.md) requests via the
[AI Gateway](./ai-gateway.md). Where the [Artist Bible](../product/artist-bible.md) is explicit,
authored context, Creative Memory is _observed_ context.

## 2. Why It Exists

A stateless prompt box treats every generation as the first one. Creative Memory is what makes
generation quality improve the more an artist uses ArtistOS — this is the compounding-value bet
described in [VISION.md](../VISION.md).

## 3. Proposed Sources

| Source                                                     | Signal                              |
| ---------------------------------------------------------- | ----------------------------------- |
| Kept vs. discarded generations                             | Implicit quality/relevance feedback |
| Post-generation edits                                      | What was wrong with the raw output  |
| Explicit feedback (thumbs up/down, notes)                  | TODO — not designed yet             |
| Which generations got attached to a real Song/Media record | Strongest positive signal           |

## 4. Proposed Mechanism (sketch)

- Every [AI Gateway](./ai-gateway.md) generation is logged (see ai-gateway.md §6).
- A retrieval step, run before assembling a new generation's prompt, pulls relevant past
  generations (by artist, by similarity, by recency — TODO: define ranking) and includes them as
  additional context.

> TODO: this is the least-specified capability. Do not over-build a retrieval/ranking system
> before there's enough real generation history to make retrieval meaningful — start with "most
> recent N kept generations for this artist" as the naive baseline, per
> [PRINCIPLES.md](../PRINCIPLES.md) — don't add abstractions ahead of a real second use case.

## 5. Current State

Not built. No generation exists yet to build memory from — this is sequenced after the
[AI Gateway](./ai-gateway.md) is live specifically so it has real data to work with, not synthetic
data.

## 6. Open Questions

> TODO:
>
> - Is Creative Memory scoped per-artist or per-organization?
> - Privacy: does an artist need to be able to view/delete what's in their Creative Memory? (Likely
>   yes, per [PRINCIPLES.md](../PRINCIPLES.md) "Artist-owned data.")

## 7. Related Documents

- [overview.md](./overview.md)
- [ai-gateway.md](./ai-gateway.md)
- [../VISION.md](../VISION.md)
- [../product/artist-bible.md](../product/artist-bible.md)
- [../product/prompt-builder.md](../product/prompt-builder.md)
