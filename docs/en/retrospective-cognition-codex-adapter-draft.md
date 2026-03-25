# Retrospective Cognition Codex Adapter Draft

Status: source of truth
Language: English
Last updated: 2026-03-26

## Purpose

This document drafts how `retrospective-cognition` should materialize for:

- `codex`

## Draft Adapter

```yaml
runtime: codex
capability: retrospective-cognition
materialize:
  copies:
    - from: core/skill.md
      to: skills/retrospective-cognition/SKILL.md
    - from: core/workflow.md
      to: skills/retrospective-cognition/workflow.md
    - from: core/template.md
      to: skills/retrospective-cognition/template.md
  renders: []
  omissions: []
post_install:
  - type: exists
    path: skills/retrospective-cognition/SKILL.md
  - type: exists
    path: skills/retrospective-cognition/workflow.md
```

## Adapter Intent

This adapter assumes that `codex` can consume a primary skill surface and
benefit from colocated supporting documents.

The adapter does not redefine the meaning of the capability.

It only defines how the runtime should receive the capability assets.

## Gate Relevance

This draft exists to help satisfy `Phase 3: Capability Contract Lock`.
