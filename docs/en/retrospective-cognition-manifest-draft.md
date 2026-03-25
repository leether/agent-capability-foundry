# Retrospective Cognition Manifest Draft

Status: source of truth
Language: English
Last updated: 2026-03-26

## Purpose

This document drafts the first runtime-agnostic manifest for:

- `retrospective-cognition`

It is a contract draft, not yet a final file-format commitment.

## Draft Manifest

```yaml
id: retrospective-cognition
name: Retrospective Cognition
version: 0.1.0
summary: Turn completed work into reusable cognition assets by separating verified state, misread state, durable lessons, and canonical carry-forward.
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
  - template
  - example
entrypoints:
  default: core/skill.md
  workflow: core/workflow.md
install_contract:
  mode: materialize
  runtime_required: true
  supports_dry_run: true
  supports_apply: true
validation_contract:
  mode: post_install_checks
  minimum_checks:
    - structural
    - runtime_materialization
    - public_safety
localization:
  source_language: en
  derived_languages:
    - zh
```

## Contract Intent

This manifest is intended to express:

- the stable identity of the capability
- the capability's maturity
- supported runtime targets
- which asset kinds belong to the capability
- what installation and validation expect at a minimum

It is not intended to express:

- runtime-specific file paths
- runtime-specific directory conventions
- runtime-specific fallbacks

Those belong in adapters.

## Gate Relevance

This draft exists to satisfy part of `Phase 3: Capability Contract Lock`.

It should be considered sufficient only when paired with:

- a `codex` adapter draft
- an `openclaw` adapter draft
