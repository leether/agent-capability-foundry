# Retrospective Cognition OpenClaw Adapter Draft

Status: source of truth
Language: English
Last updated: 2026-03-26

## Purpose

This document drafts how `retrospective-cognition` should materialize for:

- `openclaw`

## Draft Adapter

```yaml
runtime: openclaw
capability: retrospective-cognition
materialize:
  copies:
    - from: core/skill.md
      to: skills/retrospective-cognition/SKILL.md
    - from: core/workflow.md
      to: workflows/retrospective-cognition.md
    - from: core/template.md
      to: templates/retrospective-cognition-template.md
  renders: []
  omissions: []
post_install:
  - type: exists
    path: skills/retrospective-cognition/SKILL.md
  - type: exists
    path: workflows/retrospective-cognition.md
```

## Adapter Intent

This adapter assumes that `openclaw` should receive both a skill-like trigger
surface and a separate workflow-shaped artifact.

The capability meaning remains in the core.

The adapter only governs delivery.

## Gate Relevance

This draft exists to help satisfy `Phase 3: Capability Contract Lock`.
