# agent-capability-foundry

An agent-native, capability-oriented repository for curated reusable methods
across `Codex`, `OpenClaw`, and other runtime surfaces.

## What This Repository Is

`agent-capability-foundry` is a curated public repository for reusable agent
methods.

It is not limited to skills alone.

The repository uses:

- `capability` as the top-level package unit
- `skill`, `workflow`, `knowledge`, `safety`, `eval`, `template`, and
  `example` as asset kinds inside a capability

## Why Not Skill-Only

Modern agent methods are usually larger than one skill-shaped document.

They also need:

- workflow structure
- safety rules
- validation
- runtime portability
- durable knowledge boundaries

So this repository packages these layers together as capabilities.

## Portability Model

The repository uses:

- one runtime-agnostic core
- thin runtime-specific adapters

This keeps one user-facing capability ID while allowing different runtimes to
receive the right native asset shape.

## Language Policy

- English is the source of truth
- Chinese is a derived companion language

This repository starts bilingual because the intended early audience includes
both English-speaking and Chinese-speaking users.

## First Capability Wave

The first planned public capability wave is:

- `retrospective-cognition`
- `capability-creator`

The first capability turns completed work into durable cognition assets rather
than leaving the result trapped in transient chat context.

The second capability turns an initial idea into a governed capability design
through explicit phases, constraints, and gates.

## First-Wave Runtimes

The first-wave runtimes are:

- `Codex`
- `OpenClaw`

Both are treated as first-class targets from v1.

## Install Surface

The intended v1 install shape is:

```bash
agent-capability-foundry install retrospective-cognition --runtime codex --dry-run
agent-capability-foundry install retrospective-cognition --runtime openclaw --apply
```

## Repository Principles

This repository is governed by four primary constraints:

- Boundary
- Completeness
- Coherence
- Self-evolution

These principles are meant to keep the repository both usable and capable of
structured growth.
