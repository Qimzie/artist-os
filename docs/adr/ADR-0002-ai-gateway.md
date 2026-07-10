# ADR-0002: Provider-Agnostic AI Gateway

> Status: Accepted
> Date: 2026-07-10

## Context

Studio's Prompt Builder (see [product/prompt-builder.md](../product/prompt-builder.md)) needs to call out
to AI model providers for image, video, audio, and text generation. Calling provider SDKs directly
from feature code is the obvious shortcut, but couples every generation feature to specific
provider APIs, makes cost/usage tracking inconsistent, and makes it hard to ground every
generation in [Artist Bible](../product/artist-bible.md) context consistently.

## Decision

All AI generation requests go through a single internal abstraction, the
[AI Gateway](../architecture/ai-gateway.md). Features call the Gateway's interface; the Gateway
owns provider selection, prompt-context assembly, and usage/cost logging. Provider integrations
are adapters registered with the Gateway, not scattered SDK calls.

## Consequences

- Adding or replacing a model provider is a Gateway-internal change.
- Every generation is logged in one consistent shape — this doubles as the initial data source for
  [Creative Memory](../architecture/creative-memory.md), so building the Gateway correctly is a
  prerequisite for that pillar, not just a nice-to-have.
- Slightly more upfront design work than "just call the SDK" for the very first provider
  integration — accepted as justified per
  [PRINCIPLES.md](../PRINCIPLES.md) "Provider-agnostic by design," since a second provider is a
  near-certain future requirement (image + video + audio + text are all needed for MVP-adjacent
  scope), not a hypothetical one.
- Provider API keys stay server-side, only reachable through the Gateway — this is also a security
  improvement over ad-hoc client-adjacent calls.

## Alternatives Considered

- **Call provider SDKs directly per feature.** Rejected — fails the "provider-agnostic" principle
  and would need to be retrofitted the moment a second provider or Creative Memory logging is
  needed, which is already known to be true.
- **Use a third-party AI orchestration platform instead of building an internal Gateway.**
  TODO — worth evaluating once the first 1-2 providers are known, but not decided here; building a
  thin internal interface first keeps ArtistOS able to switch either way without a rewrite.
