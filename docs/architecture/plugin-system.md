# Architecture — Plugin System

> Status: Proposal — not implemented. See [ROADMAP.md](../ROADMAP.md) Phase 5.
> Last updated: 2026-07-10.

## 1. Purpose

ArtistOS cannot and should not build every AI provider integration, workflow step, or
third-party service connector itself. The Plugin System exists to let new capabilities be added to
the [AI Gateway](./ai-gateway.md) (new provider adapters) and [Workflow Engine](./workflow-engine.md)
(new step kinds) without changing core platform code for each addition.

## 2. Scope — Start Internal

MVP scope is **internal extensibility only**: plugins are written and reviewed by the ArtistOS
team, not installed by end users from a marketplace. An open, third-party plugin ecosystem is an
explicit v2/v3 goal (see [PRODUCT.md](../PRODUCT.md) §6 Non-Goals) — building the sandboxing,
review, and trust model for untrusted third-party code is a large scope increase that should not
block shipping the core product pillars.

## 3. What a Plugin Is (Proposed)

A plugin is a package that registers one or more of:

- An AI Gateway provider adapter (e.g. "Provider X image generation")
- A Workflow Engine step kind (e.g. "upscale image")
- TODO: possibly a new product-facing integration (e.g. a distribution platform connector) —
  out of scope until Phase 5 is closer.

```ts
interface Plugin {
  id: string;
  name: string;
  version: string;
  providers?: ImageProviderAdapter[] | VideoProviderAdapter[] /* etc. */;
  workflowSteps?: WorkflowStepDefinition[];
}
```

> TODO: illustrative only — finalize once the AI Gateway's own adapter interface (see
> [ai-gateway.md](./ai-gateway.md) §5) is implemented and has at least two real providers to
> generalize from.

## 4. Lifecycle & Registration

> TODO: define how plugins are registered (static import registry to start, likely — dynamic
> loading/sandboxing is a v2+ concern once/if third-party plugins are supported).

## 5. Security Considerations

- Internal-only plugins run with the same trust level as core code — no sandboxing needed for
  MVP.
- If/when third-party plugins are supported, this document must be revisited with an explicit
  threat model before any untrusted code executes server-side. Do not build sandboxing
  speculatively before that's a real requirement.

## 6. Related Documents

- [overview.md](./overview.md)
- [ai-gateway.md](./ai-gateway.md)
- [workflow-engine.md](./workflow-engine.md)
- [../adr/ADR-0003-plugin-system.md](../adr/ADR-0003-plugin-system.md)
