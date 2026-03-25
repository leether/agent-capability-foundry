# Curation Policy

Status: source of truth
Language: English
Last updated: 2026-03-26

## Purpose

This document defines how `agent-capability-foundry` decides what belongs in
the curated public repository and what does not.

The goal is not to maximize volume.

The goal is to protect:

- completeness
- coherence
- self-evolution discipline
- public safety

## Scope

This policy governs:

- capability inclusion
- public-safe wording requirements
- maturity expectations
- bilingual publication requirements
- exclusion and deprecation decisions

This policy does not govern:

- private internal note-taking
- temporary exploration artifacts that have not entered the curated public
  surface
- runtime-specific implementation details beyond what is needed for public
  portability

## Curation Principle

`agent-capability-foundry` is curated, not exhaustive.

This means:

- a capability should enter the public repository only when it is useful,
  bounded, explainable, and structurally compatible with the repository model

This repository is not intended to be:

- a dump of all internal prompts
- a mirror of raw private workflows
- a collection of partially translated notes
- a graveyard of unresolved contradictions

## Inclusion Test

A capability may enter the curated public surface only if all of the following
are true.

### 1. Boundary is explicit

The capability must clearly state:

- what problem it solves
- what it does not solve
- what runtime targets it supports
- what maturity level it currently has

### 2. Claimed scope is complete enough

Within its claimed scope, the capability must include enough structure to be
operationally meaningful.

That may include:

- skill content
- workflow framing
- safety rules
- validation
- examples
- adapter guidance

It does not need to include every possible asset kind.

But it may not claim a complete reusable method while omitting an essential
layer for that method.

### 3. The capability is coherent with repository structure

The capability must not contradict:

- the repository's `capability` model
- the `core + thin adapters` portability model
- the installer contract
- the bilingual source/derived rule
- the maturity model

### 4. Public-safety review passes

The capability must not require private context in order to be interpreted
correctly.

It must exclude or neutralize:

- private absolute paths
- private repo names used as hidden prerequisites
- private hostnames
- private credentials, tokens, keys, or endpoints
- internal-only coordination assumptions
- internal user identity or sensitive operational detail that is not needed in
  the public version

### 5. English source exists

Every curated public capability must have English normative documentation first.

English is the canonical source of truth.

### 6. Chinese derived documentation exists for first-wave public docs

Because v1 is bilingual, the public-facing entry documents must also have a
Chinese derived companion version.

Chinese may explain and translate.

Chinese may not silently redefine policy or contract semantics.

### 7. Validation exists

A public capability must define at least one validation method.

Examples:

- structural validation
- file-shape validation
- runtime materialization validation
- post-install smoke checks
- documentation parity checks

### 8. Evolution state is explicit

If a capability is still evolving, that must be visible through maturity and
revision status.

The repository may include evolving capabilities.

It may not present unresolved experimental content as if it were already stable
canon.

## Exclusion Test

A capability should be excluded from the curated public surface if any of the
following are true:

- it depends on private context that cannot be removed cleanly
- it has unresolved contradictions that are not versioned or explained
- it is only a thin prompt fragment with no bounded method around it
- it cannot be translated into the repository's portability model
- it cannot explain success, failure, or non-goals
- it has no public-safe validation path
- it would mislead users about current maturity

## Bilingual Rule

The repository uses:

- English as source
- Chinese as derived

This policy implies:

- English must be authored first for normative docs
- Chinese must preserve structural parity for first-wave public docs
- translation drift is a curation failure, not a minor cosmetic issue

## Maturity Rule

Curated content should be labeled with maturity rather than forced into false
uniformity.

Initial maturity states:

- `incubating`
- `curated`
- `production-tested`
- `deprecated`

This supports self-evolution without sacrificing coherence.

## Contradiction Rule

Contradiction does not always mean the capability must be discarded.

But contradiction must never be smuggled into the curated surface as hidden
ambiguity.

If contradiction exists, the capability must either:

- remain outside the curated surface
- be revised before inclusion
- be included with explicit maturity and revision context

## Minimal Public Capability Standard

For v1, the first capability `retrospective-cognition` should not be published
unless it has at least:

- a clear English source document set
- a Chinese derived document set for public entry docs
- one runtime-agnostic capability description
- first-class runtime treatment for:
  - `codex`
  - `openclaw`
- validation expectations
- public-safe wording
- visible maturity state

## Deprecation Rule

If a capability becomes structurally outdated, misleading, or superseded, the
repository should prefer:

- explicit deprecation
- successor linkage
- preserved history

The repository should not silently overwrite public understanding of what a
capability used to mean.

## Gate To The Next Phase

This policy helps satisfy `Phase 2: Public Safety Lock`.

The phase should be considered passed only if:

- this policy exists
- the bilingual rule exists
- the design philosophy exists
- the capability model exists
- the first capability can be evaluated against this policy without hidden
  exceptions
