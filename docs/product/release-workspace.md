# Product — Release Workspace

> Status: In build. UI shell shipped (placeholder data); backend is
> [ROADMAP.md](../ROADMAP.md) Phase 1.
> Last updated: 2026-07-10.

## 1. What It Is

The Release Workspace is where an artist plans and tracks releases: songs moving through a
pipeline (idea → recording → mixing → mastering → released), with cover art and other media
attached. It corresponds to the **Songs**, **Media**, and (org/artist-scoped) **Dashboard**
sections of the application shell.

## 2. Core Entities

See [DATABASE.md](../DATABASE.md) for the authoritative schema. Summary:

- **Artists** — profile(s) under an organization
- **Songs** — a track, with `type`/`status` pipeline and release date
- **Media** — files (cover art, photos, video, audio) attached to a song or org-level
- **Tasks** — TODO: not yet in the shipped UI; checklist items per song, per the original MVP
  scope in the earlier PRD

## 3. Current State

- [x] Songs list with status filter (placeholder data)
- [x] Media grid (placeholder data)
- [x] Dashboard stats summarizing both
- [ ] Real backend (Supabase tables + RLS)
- [ ] Task checklists per song
- [ ] Cover art upload

## 4. Relationship to Other Pillars

- Media items generated via [Studio](./prompt-builder.md)'s Prompt Builder (e.g. AI-generated cover art)
  land here as first-class Media records, not a separate generated-assets silo.
- A song's status/context can be pulled into the [Artist Bible](./artist-bible.md) /
  [Creative Memory](../architecture/creative-memory.md) as generation context (e.g. "this cover art is for a
  mastering-stage single").

## 5. Open Questions

> TODO:
>
> - Do Tasks come back into scope for MVP, or stay deferred?
> - Is a song always tied to exactly one artist, or can songs have multiple credited artists
>   (features/collabs)? Current schema (`songs.artist` as a single string) does not support this.

## 6. Related Documents

- [../PRODUCT.md](../PRODUCT.md)
- [../DATABASE.md](../DATABASE.md)
- [artist-bible.md](./artist-bible.md)
