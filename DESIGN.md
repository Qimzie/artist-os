# ArtistOS Design Direction

> Status: product direction and review guardrails. Technical token ownership remains in
> [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md).
> Last reviewed: 2026-09-21.
>
> This direction was developed for ArtistOS and reviewed against design-system patterns collected
> in [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md/tree/f6961238d5cddcf8042a74a70fc400ec67181abb).
> No third-party brand specification or token set is copied.

## Product character

ArtistOS should feel cinematic, assured, and editorial while remaining an operating system, not a
portfolio site. Artwork, photography, video, and audio are the visual protagonists; interface
chrome should frame creative work rather than compete with it. Avoid generic AI gradients,
constant glow, glass-on-glass layers, and decorative motion without product meaning.

## Hierarchy

- Make artist and organization context persistent and unmistakable.
- Lead with release progress, the next decision, and the creative asset under review.
- Keep the three product pillars legible: Release Workspace, Artist Bible, and Studio.
- The AI Gateway, Creative Memory, and provider plumbing remain invisible unless a user needs to
  understand status, consent, cost, or failure.
- Use cards for coherent objects and actions, not as a default wrapper around every section.

## Visual system

- Dark mode is the primary experience; light mode remains fully supported.
- Until the palette and type licenses are approved, use the semantic tokens in
  `src/app/globals.css` and the neutral baseline defined by `docs/DESIGN_SYSTEM.md`.
- Do not introduce branded hex values, display fonts, gold accents, or glow effects locally.
  Brand decisions belong in shared tokens after explicit approval.
- Let media supply most chroma. UI color should communicate action, selection, state, and risk.
- Use restrained radii, clear edges, and deliberate negative space to create a premium editorial
  rhythm without sacrificing operational density.

## Media and AI workflows

- Show provenance, status, model/provider, cost implication, and approval state where relevant.
- Never make generated and approved assets visually indistinguishable.
- Preserve original aspect ratios and provide predictable crop behavior.
- Loading, queued, generating, failed, rejected, and approved states must be explicit.
- Destructive actions, publishing, paid generation, and external provider writes require clear
  confirmation and must never be disguised as harmless preview actions.

## Responsive and multilingual behavior

- Design mobile-first; no core action may require hover.
- Touch targets are at least 44 by 44 CSS pixels.
- On small screens, prioritize the creative asset, current status, and next action before metadata.
- Allow at least 30% text expansion and test long artist, song, release, and organization names.
- Media grids adapt by reducing columns and preserving useful preview size, not by shrinking every
  item until labels become unreadable.

## Accessibility baseline

- Meet WCAG 2.2 AA contrast in both themes, including overlays on variable artwork.
- All workflows are keyboard operable with logical focus order and visible focus.
- Use semantic HTML before ARIA; icon-only controls require accessible names.
- Respect reduced motion and avoid autoplaying audio or video.
- Never use color alone for generation, review, release, or error status.

## Review checklist

Before accepting a UI change, verify:

1. Creative work remains the focal point and application state remains clear.
2. Generated, reviewed, approved, and published states cannot be confused.
3. Mobile and long translated content preserve all essential actions.
4. Loading, empty, queued, error, and recovery paths are designed.
5. Keyboard, focus, contrast, media controls, and reduced motion are intact.
6. New visual values are shared tokens and do not imitate an external brand.
