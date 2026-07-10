# Product — Artist Bible

> Status: Proposal — not implemented. See [ROADMAP.md](../ROADMAP.md) Phase 2.
> Last updated: 2026-07-10.

## 1. What It Is

The Artist Bible is the canonical, persistent record of who an artist is creatively — the single
source of truth that grounds every AI generation in [Studio](./prompt-builder.md)'s Prompt Builder
instead of starting from a blank prompt every time. It is not a marketing document; it's
structured data the [AI Gateway](../architecture/ai-gateway.md) reads.

## 2. Why It Exists

Generic AI tools produce generic output because they know nothing about the artist beyond a single
prompt. The core product bet (see [PRODUCT.md](../PRODUCT.md) §5) is that grounding generation in
a maintained Artist Bible produces measurably more on-brand, useful output — and that this
compounds via [Creative Memory](../architecture/creative-memory.md) over time.

## 3. Proposed Contents

| Section         | Purpose                                                                | Structured or free-form?          |
| --------------- | ---------------------------------------------------------------------- | --------------------------------- |
| Identity        | Name, aliases, genres, bio                                             | Mostly structured                 |
| Sonic identity  | Reference tracks/artists, tempo/mood tendencies, instrumentation notes | Free-form, TODO structure         |
| Visual language | Color palette, typography/mood references, example imagery             | Structured refs + free-form notes |
| Voice & tone    | How the artist talks (press, captions, lyrics tone)                    | Free-form                         |
| Do's / Don'ts   | Explicit constraints for generation (e.g. "never generate faces")      | Structured list                   |

> TODO: this is a proposal. The structured/free-form split matters a lot for how the AI Gateway
> assembles prompt context — validate against real generation quality before over-structuring.

## 4. How It's Used

- The [AI Gateway](../architecture/ai-gateway.md) reads relevant Artist Bible fields when
  assembling a generation request's final prompt.
- Studio's Prompt Builder UI should let a user see _which_ Bible context was used for a given
  generation, for trust/debuggability.

## 5. Current State

Not built. The **Artists** page in the shipped shell is a simple profile list (name, genre,
status) — it is the eventual entry point to a full Artist Bible editor, but the Bible's structured
content does not exist yet.

## 6. Open Questions

> TODO:
>
> - How much of the Bible is required before generation is "allowed," vs. optional/progressive?
> - Versioning: does the Bible need history (so past generations can be traced to the Bible state
>   at the time), or is "current state only" sufficient for MVP?

## 7. Related Documents

- [../PRODUCT.md](../PRODUCT.md)
- [../architecture/creative-memory.md](../architecture/creative-memory.md)
- [prompt-builder.md](./prompt-builder.md)
- [../architecture/ai-gateway.md](../architecture/ai-gateway.md)
