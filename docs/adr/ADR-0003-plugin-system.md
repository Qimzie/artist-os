# ADR-0003: Internal-First Plugin System

> Status: Accepted
> Date: 2026-07-10

## Context

The [AI Gateway](../architecture/ai-gateway.md) and [Workflow Engine](../architecture/workflow-engine.md)
will both need new capabilities added over time — new provider adapters, new workflow step kinds.
Without an explicit extensibility model, these additions risk being hardcoded directly into
Gateway/Engine core logic, making both harder to test and harder to reason about as they grow.

## Decision

New provider adapters and workflow steps are registered through a
[Plugin System](../architecture/plugin-system.md) — a defined registration interface — rather than
being added as ad-hoc branches inside the Gateway/Engine. For MVP and the near-term roadmap, this
plugin system is **internal-only**: plugins are authored and reviewed by the ArtistOS team, not
installed by end users. An open, third-party plugin marketplace is explicitly deferred (see
[PRODUCT.md](../PRODUCT.md) §6 Non-Goals).

## Consequences

- Provider adapters and workflow steps have a consistent shape from the start, even though only
  the ArtistOS team writes them initially — this avoids a rewrite when/if third-party plugins are
  supported later.
- No sandboxing, permissions, or trust-boundary work is needed yet, since all plugin code is
  first-party. This keeps scope honest — building a third-party trust model now would be
  speculative, against [PRINCIPLES.md](../PRINCIPLES.md) "don't add abstractions ahead of a second
  real use case."
- If/when third-party plugins become a real goal, this ADR should be superseded by a new one that
  explicitly addresses sandboxing, review process, and the threat model — that is a materially
  different, larger decision than this one.

## Alternatives Considered

- **No plugin abstraction — add providers/steps as direct code changes to the Gateway/Engine.**
  Rejected — acceptable for the very first provider, but known to not scale past 2-3 providers or
  step kinds without becoming an unmaintainable set of special cases.
- **Build a full third-party plugin marketplace now.** Rejected — significant scope (sandboxing,
  review, security) with no validated demand yet; revisit once the core pillars are shipped and
  there's a real signal that external developers want to extend ArtistOS.
