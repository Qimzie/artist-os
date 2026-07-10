# Architecture — Workflow Engine

> Status: Proposal — not implemented. See [ROADMAP.md](../ROADMAP.md) Phase 5.
> Last updated: 2026-07-10.

## 1. Purpose

A single [AI Gateway](./ai-gateway.md) call covers one generation. Real creative work is usually a
_sequence_: generate a storyboard's scene list, then an image per scene, then a video per scene,
then assemble. The Workflow Engine exists to make that sequence a first-class, resumable,
inspectable thing instead of ad-hoc client-side chaining of Gateway calls.

## 2. Responsibilities

- Define a workflow as an ordered (or DAG-shaped) sequence of steps, where a step is either an AI
  Gateway call or a deterministic transformation (e.g. "crop to 16:9").
- Execute a workflow run, persisting per-step status/output so a run can be resumed or retried
  from a failed step rather than restarted from scratch.
- Pass output of one step as input/context to the next.
- Surface progress to the UI (e.g. Storyboard generation showing per-scene status).

## 3. Non-Responsibilities

- The Workflow Engine does not talk to model providers directly — every generation step delegates
  to the [AI Gateway](./ai-gateway.md).
- It does not define _what_ workflows exist for a given product surface — that's defined per
  feature (e.g. "Storyboard generation" is a workflow _definition_ owned by the Studio /
  Prompt Builder feature, not by the engine itself).

## 4. Proposed Model (sketch)

```ts
interface WorkflowStep {
  id: string;
  kind: "generate" | "transform";
  // "generate" steps reference an AI Gateway request template;
  // "transform" steps reference a pure function by name.
  dependsOn?: string[]; // step ids
}

interface WorkflowDefinition {
  id: string;
  name: string;
  steps: WorkflowStep[];
}

interface WorkflowRun {
  id: string;
  definitionId: string;
  status: "pending" | "running" | "completed" | "failed";
  stepResults: Record<string, { status: string; output?: unknown; error?: string }>;
}
```

> TODO: illustrative only. Confirm whether this needs to be a true DAG (parallel steps) or a
> simple ordered pipeline is sufficient for the first real workflow (Storyboard generation).

## 5. First Real Use Case

The first workflow this should power is Storyboard generation (already stubbed as placeholder UI
in Studio): scene breakdown → per-scene image generation → optional per-scene video. Build the
engine against this concrete case, not speculatively.

## 6. Related Documents

- [overview.md](./overview.md)
- [ai-gateway.md](./ai-gateway.md)
- [plugin-system.md](./plugin-system.md)
- [../product/prompt-builder.md](../product/prompt-builder.md)
