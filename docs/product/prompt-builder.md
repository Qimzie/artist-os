# Product — Prompt Builder

> Status: UI shell shipped (placeholder data, no real generation). Real generation is
> [ROADMAP.md](../ROADMAP.md) Phase 3.
> **"Prompt Builder" is an internal/architecture name** — it is not shown to end users. In the
> product UI this surface is just the **Prompts** tab inside **Studio**; users never see the term
> "Prompt Builder" or "Prompt Engine."
> Last updated: 2026-07-10.

## 1. What It Is

The Prompt Builder is where prompts are authored, saved, and run against a model — the surface
where the [AI Gateway](../architecture/ai-gateway.md) is actually invoked by a user. It lives
inside the **Studio** section of the application shell as the **Prompts** tab, alongside a
Storyboards tab (see [../architecture/workflow-engine.md](../architecture/workflow-engine.md) for
how storyboards become a multi-step workflow rather than a single prompt).

## 2. Current State (Shipped UI)

- [x] Saved-prompt list (placeholder data)
- [x] Prompt editor: title, model select (Image/Video/Audio/Text), prompt body
- [x] Disabled "Generate" button (no backend yet)
- [ ] Real generation via the [AI Gateway](../architecture/ai-gateway.md)
- [ ] Grounding in [Artist Bible](./artist-bible.md) context
- [ ] Generation history / [Creative Memory](../architecture/creative-memory.md) integration
- [ ] Output saved as a [Media](./release-workspace.md) record when kept

## 3. Target Flow (Once Backend Lands)

1. User selects/creates a prompt, picks a model type.
2. On Generate, the request goes to the AI Gateway with the artist's Bible context auto-attached.
3. Result is shown; user keeps or discards it.
4. Kept results become Media records (if image/video/audio) and feed
   [Creative Memory](../architecture/creative-memory.md).

## 4. Open Questions

> TODO:
>
> - Should users be able to see/edit exactly what Artist Bible context was injected before
>   generating, or is that always implicit?
> - Cost/credit model for generation — per-org quota, pay-per-use, or plan-gated? Depends on
>   billing, which is out of MVP scope.

## 5. Related Documents

- [../PRODUCT.md](../PRODUCT.md)
- [artist-bible.md](./artist-bible.md)
- [creative-memory.md](../architecture/creative-memory.md)
- [../architecture/ai-gateway.md](../architecture/ai-gateway.md)
- [../architecture/workflow-engine.md](../architecture/workflow-engine.md)
