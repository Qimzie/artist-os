# Architecture — AI Gateway

> Status: Proposal — not implemented. See [ROADMAP.md](../ROADMAP.md) Phase 3.
> **The AI Gateway has no user-facing name and no UI surface of its own — it is entirely
> invisible to the end user.** Users interact with [Studio](../product/prompt-builder.md), not
> with "the AI Gateway"; this document is for engineering/architecture reference only.
> Last updated: 2026-07-10.

## 1. Purpose

No feature should call an AI provider's SDK directly. The AI Gateway is the single, provider-agnostic
entry point for every generation request (image, video, audio, text) in ArtistOS. It exists so
that:

- Adding or swapping a model provider is a Gateway-internal change, not a rewrite across every
  feature that generates content.
- Every generation is logged consistently (cost, provider, prompt, artist/org, output) — this is a
  prerequisite for [Creative Memory](./creative-memory.md), not just observability.
- Generation requests can be grounded in [Artist Bible](../product/artist-bible.md) context in one
  place, rather than every caller re-implementing prompt assembly.

See [PRINCIPLES.md](../PRINCIPLES.md) — "Provider-agnostic by design."

## 2. Responsibilities

- Route a generation request to the right provider/model for its type (image/video/audio/text) and
  any per-request preference.
- Assemble final prompt context: user's raw prompt + relevant Artist Bible fields + relevant
  Creative Memory retrieval.
- Track usage and cost per organization (for future billing/plan-gating).
- Normalize provider responses into a single ArtistOS-internal result shape, regardless of which
  provider handled the request.
- Handle provider-level failures/retries without leaking provider-specific error shapes to
  callers.

## 3. Non-Responsibilities

- The Gateway does not decide _what_ to generate — that's the [Prompt Builder](../product/prompt-builder.md)
  and, later, the [Workflow Engine](./workflow-engine.md).
- The Gateway does not store generated assets long-term — that's [Media](../product/release-workspace.md).

## 4. Proposed Interface (sketch)

```ts
interface GenerationRequest {
  type: "image" | "video" | "audio" | "text";
  prompt: string;
  artistId: string; // for Artist Bible grounding
  orgId: string; // for tenancy + cost attribution
  providerPreference?: string; // optional override
  params?: Record<string, unknown>; // provider-specific knobs
}

interface GenerationResult {
  id: string;
  type: GenerationRequest["type"];
  provider: string;
  model: string;
  output: { url: string } | { text: string };
  costUsd: number;
  createdAt: string;
}

interface AiGateway {
  generate(request: GenerationRequest): Promise<GenerationResult>;
}
```

> TODO: this is illustrative, not final. Confirm request/response shape once the first provider
> integration starts.

## 5. Provider Adapters

Each provider is an adapter implementing a common per-type interface (e.g.
`ImageProviderAdapter`, `VideoProviderAdapter`). The Gateway holds a registry of adapters and
selects one by type + preference + availability.

> TODO: decide the first providers to integrate for MVP generation coverage (see
> [PRODUCT.md](../PRODUCT.md) §8 open questions).

## 6. Cost & Usage Tracking

Every `GenerationResult` is persisted (org, artist, provider, cost, prompt, output reference) —
this table is also the first data source for [Creative Memory](./creative-memory.md).

> TODO: define the `generations` table in [DATABASE.md](../DATABASE.md) once this is built.

## 7. Security & Key Management

- Provider API keys are server-only, never exposed to the client. The Gateway is called from
  Server Actions / route handlers only.
- Per-organization rate limiting and cost caps to prevent runaway spend — TODO, design once
  billing (Phase beyond MVP) exists.

## 8. Related Documents

- [overview.md](./overview.md)
- [modules.md](./modules.md)
- [workflow-engine.md](./workflow-engine.md)
- [../product/prompt-builder.md](../product/prompt-builder.md)
- [../adr/ADR-0002-ai-gateway.md](../adr/ADR-0002-ai-gateway.md)
