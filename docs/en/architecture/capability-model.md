# Capability Model

Status: source of truth
Language: English
Last updated: 2026-03-26

## Purpose

This document defines the object model for `agent-capability-foundry`.

Its job is to answer:

- what a capability is
- how a capability differs from a skill
- how runtime portability works
- how installation, validation, and evolution attach to the model

This document is governed by the design philosophy in:

- [design-philosophy.md](../design-philosophy.md)

## Stage Context

This document belongs to:

- `Phase 3: Capability Contract Lock`

It should be read as a contract-design document, not an implementation guide.

At this stage:

- installer implementation is out of scope
- public export is out of scope
- schema shape and boundary rules are in scope

## Core Claim

`agent-capability-foundry` should use `capability` as its top-level package
unit.

A `capability` is not the same thing as a runtime-native skill.

A capability is a portable bundle that can materialize into one or more
runtime-native assets such as:

- a skill
- a workflow definition
- a safety policy
- a knowledge bundle
- an eval suite
- templates

## Why Capability Instead Of Skill

`skill` is too narrow as the top-level repository object because a skill
normally describes only one part of a usable agent method:

- role
- trigger
- behavior
- sometimes output shape

But a complete reusable method may also require:

- runtime-specific placement
- validation
- safety rules
- examples
- workflow context
- evolution and maturity metadata

So:

- `skill` is an asset kind
- `capability` is the package and distribution unit

## Object Layers

The repository should distinguish four layers:

1. Repository layer
2. Capability layer
3. Asset layer
4. Runtime materialization layer

### 1. Repository layer

The repository provides:

- curation policy
- capability catalog
- localization policy
- runtime portability model
- installer surface

### 2. Capability layer

A capability is the stable user-facing unit.

Users should install by capability ID, not by individual asset file.

Examples:

- `retrospective-cognition`

### 3. Asset layer

A capability may contain multiple asset kinds.

Initial supported asset kinds should include:

- `skill`
- `workflow`
- `knowledge`
- `safety`
- `eval`
- `template`
- `example`

### 4. Runtime materialization layer

Each runtime receives only what it can understand in its own native form.

Examples:

- `Codex` may receive a `SKILL.md` plus supporting files
- `OpenClaw` may receive a skill-like asset plus workflow or configuration files

## Portability Model

The portability model should be:

- `core + thin adapters`

### Core

The `core` contains runtime-agnostic intent and shared assets.

The core should hold:

- canonical meaning
- asset inventory
- public-safe wording
- validation intent
- maturity state

The core should not hold:

- runtime-specific install paths
- runtime-specific directory conventions
- runtime-specific hidden assumptions

### Thin adapters

An adapter expresses how one runtime should receive the capability.

The adapter should stay narrow.

Allowed adapter responsibilities:

- copy
- render
- omit
- post-install validate

Disallowed adapter behavior:

- silently redefining the meaning of the capability
- becoming a second full copy of the capability
- creating deep inheritance chains

## Capability Contract

Each capability should provide a runtime-agnostic manifest.

Recommended minimum fields:

```yaml
id: retrospective-cognition
name: Retrospective Cognition
version: 0.1.0
summary: Turn completed work into reusable internal cognition assets.
maturity: incubating
supported_runtimes:
  - codex
  - openclaw
asset_kinds:
  - skill
  - workflow
  - knowledge
  - safety
  - eval
entrypoints:
  default: core/skill.md
install_contract:
  mode: materialize
validation_contract:
  mode: post_install_checks
```

This manifest should describe what the capability is, not how one runtime
implements it.

## Adapter Contract

Each runtime adapter should provide only the runtime-specific transformation.

Recommended minimum fields:

```yaml
runtime: codex
capability: retrospective-cognition
materialize:
  copies:
    - from: core/skill.md
      to: skills/retrospective-cognition/SKILL.md
  renders: []
  omissions: []
post_install:
  - type: exists
    path: skills/retrospective-cognition/SKILL.md
```

And for another runtime:

```yaml
runtime: openclaw
capability: retrospective-cognition
materialize:
  copies:
    - from: core/skill.md
      to: skills/retrospective-cognition/SKILL.md
    - from: core/workflow.md
      to: workflows/retrospective-cognition.md
  renders: []
  omissions: []
post_install:
  - type: exists
    path: skills/retrospective-cognition/SKILL.md
```

These examples are structural, not final path commitments.

## Installation Model

The installation model for v1 should be:

- install by capability ID
- require explicit runtime selection
- support `dry-run`
- support `apply`
- materialize runtime-native files
- run post-install validation

The model should not rely on:

- implicit runtime auto-detection
- hidden mutation
- opaque fallback behavior

This keeps installation user-friendly without making it misleading.

## Validation Model

Validation belongs to the capability model from the start.

Each capability should define:

- what successful installation means
- what minimal post-install checks should pass
- what is still out of scope for v1

Validation types may include:

- file existence checks
- shape checks
- runtime-native smoke checks
- documentation parity checks

## Maturity Model

A capability should never pretend to be more stable than it is.

Initial maturity states should include:

- `incubating`
- `curated`
- `production-tested`
- `deprecated`

Maturity exists to support self-evolution without losing coherence.

## Bilingual Constraint

The capability model must respect the repository-wide localization rule:

- English is the source of truth
- Chinese is derived

That means:

- normative capability semantics should be authored in English first
- Chinese capability docs may explain and translate
- Chinese docs may not become an independent canonical contract

## First-Wave Runtime Constraint

The first-wave runtimes are:

- `codex`
- `openclaw`

`OpenClaw` is not a future placeholder.

It must be treated as a first-class target in the initial capability model and
not as an afterthought after `Codex`.

## Self-Evolution Constraint

The model itself may evolve.

But revisions to the model must be:

- explicit
- documented
- versioned
- justified by a concrete mismatch, blind spot, or new requirement

The model may not evolve through silent divergence between capability docs,
adapter behavior, and installer behavior.

## Non-Goals For V1

This model does not require v1 to solve:

- every possible runtime
- automatic runtime detection
- every possible localization target
- every asset kind in final mature form

V1 only needs:

- a coherent core model
- a coherent adapter model
- one initial capability
- first-class support for `codex` and `openclaw`

## Gate To The Next Phase

This document is sufficient to support the next gate only if:

- curation policy is also written
- evolution policy is also written
- the first capability can be described using this model without hidden
  exceptions

Only then should the work move toward installer design.
