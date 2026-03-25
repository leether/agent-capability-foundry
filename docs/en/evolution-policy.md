# Evolution Policy

Status: source of truth
Language: English
Last updated: 2026-03-26

## Purpose

This document defines how `agent-capability-foundry` is allowed to change.

Its goal is to make self-evolution operational without turning the repository
into a collection of silent exceptions or contradictory fragments.

## Scope

This policy governs:

- revisions to repository-level principles
- revisions to capability contracts
- revisions to runtime adapters
- maturity transitions
- contradiction handling
- deprecation and successor flow

This policy does not govern:

- casual drafting before something enters the curated public surface
- internal private experimentation outside the public repository boundary

## Core Rule

The repository may evolve.

But it may evolve only through explicit revision, not silent drift.

This rule applies to:

- documents
- contracts
- adapters
- terminology
- capability scope
- maturity claims

## Why Evolution Is Needed

The repository is expected to encounter:

- blind spots
- stale assumptions
- runtime differences
- new asset shapes
- new validation needs
- new public-audience requirements

If the repository forbids revision, it becomes rigid and misleading.

If it allows unstructured revision, it loses coherence.

So the point of this policy is not to reduce change.

The point is to structure change.

## Acceptable Triggers For Revision

Revision is acceptable when one or more of the following is true:

- a contradiction has been detected
- a blind spot has been confirmed
- a current contract cannot express a valid new pattern
- a public-safety rule is missing or too weak
- a runtime adapter forces repeated exceptions
- a maturity label is no longer accurate
- a better structure clearly reduces repository-wide ambiguity

## Required Revision Process

When a significant revision is proposed, the repository should:

1. name the object being revised
2. name the trigger for change
3. identify the affected boundary
4. classify the change
5. document the revision
6. update validation expectations
7. update maturity or deprecation state if needed
8. restore a coherent published state

## Revision Classes

Changes should be classified into one of the following classes:

- `boundary-change`
- `completeness-expansion`
- `coherence-repair`
- `portability-repair`
- `safety-tightening`
- `evaluation-upgrade`
- `deprecation`

The goal of classification is not bureaucracy.

It is to prevent hidden semantic drift.

## Maturity And Evolution

Maturity is part of the evolution system.

Initial maturity states:

- `incubating`
- `curated`
- `production-tested`
- `deprecated`

Evolution should move through these states explicitly rather than pretending all
content is equally stable.

## Contradiction Handling

Contradiction must be treated as a signal, not buried as ambiguity.

When contradiction appears, the repository should decide whether it is:

- a boundary problem
- a completeness problem
- a coherence problem
- a portability problem
- an evolution problem

Possible responses:

- revise the affected document or contract
- widen the declared boundary
- tighten the declared boundary
- split one capability into multiple bounded capabilities
- mark the capability as lower maturity
- deprecate the current form and define a successor

## Forbidden Evolution Patterns

The repository must not evolve through:

- silent redefinition of canonical terms
- undocumented adapter-specific behavior that changes capability meaning
- letting Chinese and English drift into two separate normative truths
- keeping contradictory public docs without revision context
- skipping validation while changing public contract semantics
- shipping experimental behavior as if it were stable canon

## Minimal Revision Artifacts

For meaningful changes, the following artifacts should exist:

- an updated canonical document
- updated derived language document(s) when required
- updated validation expectation when behavior changes
- updated maturity state when stability changes
- updated successor or deprecation note when replacement occurs

## Relationship To Design Philosophy

This policy implements the self-evolution constraint from:

- [design-philosophy.md](./design-philosophy.md)

The design philosophy defines:

- why the repository must evolve
- why it must remain coherent while doing so

This policy defines:

- how that evolution is allowed to happen

## Relationship To Curation Policy

This policy should be read together with:

- [curation-policy.md](./curation-policy.md)

The curation policy decides what may enter the curated surface.

The evolution policy decides how the curated surface may change over time.

## Phase Gate

This policy helps satisfy:

- `Phase 3: Capability Contract Lock`

The project should not move to installer design until:

- design philosophy exists
- capability model exists
- curation policy exists
- evolution policy exists
- the first capability can be described without hidden exceptions across:
  - contract
  - curation
  - evolution
