# Retrospective Cognition Capability Spec

Status: source of truth
Language: English
Last updated: 2026-03-26

## Purpose

This document describes the first planned public capability:

- `retrospective-cognition`

Its job is to prove that the repository's current policy and capability model
can describe one real capability without hidden exceptions.

## Capability ID

- `retrospective-cognition`

## Summary

Turn completed work into reusable cognition assets by separating:

- what is verified
- what was misread
- what should persist
- what should remain out of the canonical surface

## Intended Use

This capability is intended for agent or operator workflows where a meaningful
round of work has just completed and the result should not remain trapped in
chat context only.

Typical use cases:

- post-debugging sedimentation
- rollout checkpoint capture
- repeated blocker extraction
- user-correction persistence
- creation of reusable internal patterns from finished work

## Non-Goals

This capability is not intended to be:

- a generic journaling system
- an unrestricted memory dump
- an external storytelling workflow
- a substitute for task execution itself
- a replacement for public-safe editorial review

## Asset Shape

The planned capability should include these asset kinds:

- `skill`
- `workflow`
- `knowledge`
- `safety`
- `eval`
- `template`
- `example`

### Why these asset kinds are needed

- `skill`
  - to express when and how the capability should trigger
- `workflow`
  - to express the ordered retrospective procedure
- `knowledge`
  - to define where stable lessons belong and where they do not
- `safety`
  - to prevent private internal cognition from leaking into public artifacts
- `eval`
  - to check whether output is actually structured, bounded, and useful
- `template`
  - to make the capability repeatable
- `example`
  - to show what good and bad outputs look like

## Runtime Targets

First-wave runtime targets:

- `codex`
- `openclaw`

These two runtimes must be treated as first-class from v1.

## Maturity

Recommended initial maturity:

- `incubating`

Reason:

- the method is promising and already useful
- but the public-safe form, adapter shape, and validation expectations are not
  yet proven through repeated public-facing use

## Core Semantics

The capability should preserve the following core semantics across runtimes:

1. reload relevant source-of-truth layers
2. separate verified state from inference
3. identify what should persist
4. write the smallest durable artifact that preserves the lesson
5. promote upward only when the lesson is stable enough
6. keep external storytelling separate from internal cognition

These semantics should remain stable even if runtime-native file shapes differ.

## Public-Safety Constraint

The public form of this capability must not assume:

- private repository names
- private mailbox or coordination paths
- private machine names
- private user identities
- private operational incidents

The public version may describe the pattern.

It may not depend on unrevealed internal infrastructure in order to make sense.

## Bilingual Constraint

This capability follows the repository rule:

- English is canonical
- Chinese is derived

That means:

- this document is the normative source
- Chinese companion documentation may explain but not redefine capability
  semantics

## Portability Constraint

The capability must remain expressible under:

- one runtime-agnostic core meaning
- thin runtime-specific adapters

If a runtime requires redefinition of the method rather than adaptation of the
delivery, that is evidence the capability boundary needs revision.

## Validation Expectations

The capability should eventually be considered valid only if all of the
following can be checked:

- the trigger condition is understandable
- the retrospective output separates verified facts from inference
- the output distinguishes durable lessons from temporary noise
- private context is not leaked in the public-safe version
- the resulting artifacts map cleanly onto the repository's designated layers

## Current Gate Assessment

Against the current repository rules, this capability is:

- boundary-explicit:
  - yes
- complete enough for initial public modeling:
  - yes, at the specification layer
- describable across current contract / curation / evolution rules without
  hidden exceptions:
  - yes, at the draft layer
- fully materialized for installation:
  - no
- ready for public export:
  - no

## What Still Blocks The Next Phase

This capability still needs:

- a public-safe asset inventory
- one minimal validation example
- installer-facing contract work for `Phase 4`

At the current draft layer, the `Phase 3` documentation gate can be considered
substantially satisfied.
