# Agent Playbooks Design Philosophy

Status: source of truth
Language: English
Last updated: 2026-03-26

## Purpose

This document defines the governing philosophy for the future public repository
`agent-capability-foundry`.

It is not a style note.

It is a repository-level constraint system that should shape:

- what gets included
- how content is structured
- how contradictions are handled
- how the repository evolves without losing integrity

## Core Requirement

The governing constraints must be self-referential.

That means the constraint system must be able to evaluate not only repository
content, but also itself.

If the principles cannot be applied to their own wording, boundaries, and
revision process, then they are not strong enough to govern a living
methodology repository.

## Governing Quartet

The repository is governed by four primary constraints:

1. Boundary
2. Completeness
3. Coherence
4. Self-evolution

These four constraints are intended to work together.

They should not be treated as independent slogans.

## Boundary

Every meaningful rule, capability, and document must declare:

- what scope it governs
- what scope it does not govern
- what time scale it applies to
- what evidence is sufficient to revise it

Boundary exists to prevent false completeness.

Without boundary, completeness expands without limit and becomes unusable.

## Completeness

Completeness means:

- within a declared boundary, the repository should cover the major layers
  needed to make its claimed methodology operational

For this repository, those layers include:

- capability definition
- workflow / orchestration
- tool use
- safety / approvals
- eval / validation
- context / knowledge / memory
- runtime portability

Completeness does not mean "include everything."

It means:

- do not present a methodology as whole if a major operational layer is missing

## Coherence

Coherence means:

- within a given released state, the repository's layers should agree with each
  other

The following should not contradict each other:

- repository name
- top-level abstraction
- file layout
- install surface
- runtime adapter model
- documentation
- localization model
- curation policy

Coherence exists to prevent hidden exceptions and user confusion.

## Self-Evolution

Self-evolution means:

- when the repository encounters a blind spot, contradiction, or new pattern,
  it must be able to revise itself explicitly rather than freezing or drifting

Self-evolution does not cancel completeness or coherence.

It governs transitions between states.

Completeness and coherence judge the quality of a given state.
Self-evolution judges the quality of change between states.

## How The Quartet Fits Together

- Boundary constrains what must be complete.
- Completeness constrains what a claimed scope may omit.
- Coherence constrains how the completed layers fit together at one point in
  time.
- Self-evolution constrains how the repository changes when new evidence
  challenges the current state.

This makes the quartet recursive but stable:

- a release should be boundary-aware, complete enough, and coherent
- a revision should be explicit, evidence-based, and capable of restoring a new
  coherent state

## Self-Reference Test

The quartet must also apply to itself.

### Boundary of the quartet

The quartet governs repository design, curation, installation model, runtime
portability, documentation, and revision policy.

It does not claim to be a universal theory for all organizations or all forms
of knowledge.

### Completeness of the quartet

The quartet is complete enough for repository governance because it covers:

- scope control
- current-state quality
- cross-layer consistency
- structured revision

It is not absolutely complete for every philosophical or organizational
question.

### Coherence of the quartet

The quartet is coherent only if the constraints are interpreted at different
time scales:

- Boundary, Completeness, and Coherence govern released states
- Self-evolution governs revision between states

If Self-evolution is interpreted as permission for permanent contradiction, the
quartet becomes incoherent.

### Self-evolution of the quartet

The quartet itself may be revised.

But such revision must be:

- explicit
- versioned
- justified
- linked to evidence
- followed by a return to a coherent new state

The quartet may not evolve through silent semantic drift.

## Contradiction Policy

Contradiction is not automatically failure.

It is often a signal of one of the following:

- a blind spot in current coverage
- a mismatch between layers
- a stale contract
- a new valid pattern that the current model cannot yet express

The repository should respond by:

1. detecting the contradiction
2. localizing it
3. naming its type
4. deciding whether it belongs in:
   - boundary change
   - completeness expansion
   - coherence repair
   - explicit evolution
5. revising the affected layer
6. restoring a coherent released state

## Operational Rules

The repository should evolve by:

- explicit design documents
- versioned capability contracts
- maturity states
- deprecation paths
- validation before promotion into curated surfaces

The repository should not evolve by:

- undocumented exceptions
- parallel contradictory truths left unresolved in curated docs
- hidden changes to the meaning of canonical terms
- publishing experimental content as if it were stable canon

## Design Consequence

This philosophy implies:

- the repository should optimize for structured evolution, not static rigidity
- contradiction may appear during exploration
- contradiction may not remain unresolved inside the curated canonical surface
- local usefulness is not sufficient if it weakens repository-wide integrity

## Canonical Rule

The repository should remain:

- boundary-aware
- complete enough for its claimed scope
- coherent at every published state
- explicitly self-evolving when new evidence forces revision

That is the governing philosophy for `agent-capability-foundry`.
