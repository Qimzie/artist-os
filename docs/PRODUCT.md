# ArtistOS — Product

> Status: Draft. Owner: TODO — assign a DRI.
> Supersedes the earlier `PRD.md`. See [VISION.md](./VISION.md) for the long-term "why" and
> [PRINCIPLES.md](./PRINCIPLES.md) for the rules that constrain how we get there.
> Last updated: 2026-07-10.

## 1. Summary

ArtistOS is an AI-native operating system for an artist's career: a single workspace where an
artist (or the small team around them) plans releases, keeps a canonical record of who they are
creatively, and uses AI generation as a first-class, governed part of the workflow rather than a
bolt-on feature.

> TODO: Replace with a one-paragraph pitch a new hire or investor could read and understand in 30
> seconds.

## 2. Problem Statement

> TODO: Describe the specific, painful problem artists have today — spreadsheets and DAW project
> files for release planning, no persistent "brand memory" that AI tools can draw on, and AI
> generation tools that are disconnected from the artist's actual catalog and style.

## 3. Product Pillars

ArtistOS is organized around three user-facing pillars. Each has its own deep-dive doc:

| Pillar            | User-facing name  | Doc                                                            | One-line description                                                                                                                        |
| ----------------- | ----------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Release Workspace | "Songs" / "Media" | [product/release-workspace.md](./product/release-workspace.md) | Plan and track songs/releases through a pipeline, with media attached.                                                                      |
| Artist Bible      | "Artists"         | [product/artist-bible.md](./product/artist-bible.md)           | The canonical, persistent record of an artist's identity, voice, and visual style.                                                          |
| Prompt Builder    | "Studio"          | [product/prompt-builder.md](./product/prompt-builder.md)       | Where prompts are authored, saved, run, and turned into generated assets. "Prompt Builder" is an internal name only — never shown to users. |

Two capabilities power these pillars but are **entirely invisible to the end user** — no UI
surface, no user-facing name:

| Capability      | Doc                                                                  | One-line description                                                                    |
| --------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| AI Gateway      | [architecture/ai-gateway.md](./architecture/ai-gateway.md)           | Routes generation requests to model providers.                                          |
| Creative Memory | [architecture/creative-memory.md](./architecture/creative-memory.md) | Durable context — past decisions, feedback, and preferences — that generation draws on. |

Longer-term, a [Plugin System](./architecture/plugin-system.md) extends the AI Gateway and
Workflow Engine with new providers and workflow steps.

## 4. Target Users & Personas

| Persona                                    | Description | Primary Goals |
| ------------------------------------------ | ----------- | ------------- |
| Independent artist                         | TODO        | TODO          |
| Small label / management team              | TODO        | TODO          |
| Collaborator (producer, engineer, manager) | TODO        | TODO          |

> TODO: Confirm the primary tenant type against real user research. The architecture assumes an
> `organization` can represent either a solo artist or a label managing multiple artists.

## 5. Goals

- TODO: Business goal (e.g. paid conversion target, retention target).
- Prove that a persistent Artist Bible + Creative Memory measurably improves AI generation
  quality/relevance versus stateless prompting — this is the core product bet.
- Ship a functional MVP on the Release Workspace pillar first; the other pillars build on it.

## 6. Non-Goals (for now)

- Finance/royalty tracking, booking/tour management, rights/contract management, and fan CRM
  remain out of scope — see [ROADMAP.md](./ROADMAP.md).
- No public API or third-party plugin marketplace in MVP — the Plugin System starts as an internal
  extensibility mechanism, not an open ecosystem.
- No mobile native app — mobile-first responsive web only.

## 7. Success Metrics

> TODO: Define measurable success criteria, e.g.:
>
> - Activation: % of signups that complete an Artist Bible within 7 days.
> - Engagement: generations per active artist per week via Studio.
> - Quality signal: % of AI generations kept/used vs. discarded, and whether that improves as
>   Creative Memory accumulates.

## 8. Open Questions

> TODO: Track open product questions here, e.g.:
>
> - Free tier vs. trial-only?
> - How much of the Artist Bible is structured fields vs. free-form text the AI Gateway embeds?
> - Which AI providers are must-have for MVP generation coverage (image/video/audio/text)?

## 9. Related Documents

- [VISION.md](./VISION.md) — long-term direction
- [PRINCIPLES.md](./PRINCIPLES.md) — product & engineering principles
- [ROADMAP.md](./ROADMAP.md) — MVP → v2 → v3 plan
- [architecture/overview.md](./architecture/overview.md) — system architecture
- [adr/](./adr/) — architecture decision records
