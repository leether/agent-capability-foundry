# Retrospective Cognition Asset Inventory

Status: source of truth
Language: English
Last updated: 2026-03-26

## Purpose

This document lists the minimum public-safe assets required for the first
capability:

- `retrospective-cognition`

Its job is to keep the capability from becoming an empty shell.

## Minimum V1 Asset Inventory

The first public-safe asset set should include:

- `skill`
  - primary trigger and behavior surface
- `workflow`
  - ordered retrospective procedure
- `template`
  - reusable output template
- `safety`
  - public-safe redaction and boundary rules
- `eval`
  - one minimal validation example
- `example`
  - one good output example and one bounded failure example

## English Source Assets

The English source asset set should include at minimum:

- `docs/en/design-philosophy.md`
- `docs/en/architecture/capability-model.md`
- `docs/en/curation-policy.md`
- `docs/en/evolution-policy.md`
- `docs/en/retrospective-cognition-capability-spec.md`
- `docs/en/retrospective-cognition-manifest-draft.md`
- `docs/en/retrospective-cognition-codex-adapter-draft.md`
- `docs/en/retrospective-cognition-openclaw-adapter-draft.md`
- `docs/en/installer-surface.md`

## Chinese Derived Assets

The Chinese derived set should include the companion docs for the public entry
surfaces above.

## Assets Still Missing Before Public Export

The following are still needed before first public export:

- a concrete public-safe `skill` asset file
- a concrete `workflow` asset file
- a concrete `template` asset file
- a concrete `safety` asset file
- one minimal public validation example
- one minimal good/bad output example pair

## Gate Relevance

This inventory exists to keep Phase 4 and later phases honest.

The project should not claim installation readiness or public export readiness
if the first capability lacks its minimum public-safe asset set.
