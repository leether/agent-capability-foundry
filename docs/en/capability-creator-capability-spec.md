# Capability Creator Capability Spec

Status: source of truth
Language: English
Last updated: 2026-03-26

## Purpose

This document describes the second planned public capability:

- `capability-creator`

Its role is to turn an initial intent into a governed capability design through
an explicit workflow rather than through ad hoc drafting.

## Capability ID

- `capability-creator`

## Summary

Create a governed capability from intent by driving:

- boundary definition
- stage partitioning
- stage-specific constraints
- cross-stage gates
- English-source / Chinese-derived documentation
- runtime-aware adapter planning
- validation expectations

## Intended Use

Use this capability when:

- a new capability idea exists
- the idea should be turned into a reusable package rather than a loose note
- the repository needs a structured path from concept to public-safe capability

## Non-Goals

This capability is not intended to be:

- a generic brainstorming assistant with no gates
- a repository bootstrap diary
- an automatic code generator
- a substitute for public-safety review
- a replacement for runtime-specific adapter design

## Core Nature

The essence of this capability is a workflow.

It is a meta-capability that creates other capabilities.

Its output is not merely text.

Its output should be a bounded capability package design with explicit phases,
constraints, and gates.

## Core Workflow Semantics

The capability should preserve these semantics:

1. start from intent
2. define boundary
3. partition work into phases
4. define constraints for each phase
5. define cross-phase gates
6. prevent stage jumping without gate checks
7. require English source before Chinese derived docs
8. require runtime-aware capability modeling
9. require validation before promotion

## Runtime Targets

First-wave runtime targets:

- `codex`
- `openclaw`

## Maturity

Recommended initial maturity:

- `incubating`

Reason:

- the workflow is already being practiced successfully
- but the public-safe packaging and reusable asset surface still need repeated
  validation

## Asset Shape

The planned capability should include:

- `skill`
- `workflow`
- `template`
- `safety`
- `eval`
- `example`

## Public-Safety Constraint

The public form of this capability must describe the workflow pattern without
depending on:

- private repo paths
- private mailbox mechanics
- private host or operator naming
- private internal operating evidence

## Validation Expectations

The capability should validate that the resulting design contains:

- an explicit intent
- named phases
- phase-specific constraints
- cross-phase gates
- English-source / Chinese-derived documentation rule
- runtime-aware capability planning
- explicit next gate judgment

## Current Gate Assessment

Against the current repository rules, this capability is:

- boundary-explicit:
  - yes
- complete enough for initial public modeling:
  - yes, at the specification layer
- fully materialized for installation:
  - no
- ready for public export:
  - no
