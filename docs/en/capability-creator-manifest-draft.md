# Capability Creator Manifest Draft

Status: source of truth
Language: English
Last updated: 2026-03-26

## Draft Manifest

```yaml
id: capability-creator
name: Capability Creator
version: 0.1.0
summary: Create a governed capability from intent by driving phases, constraints, gates, bilingual source-derived docs, and runtime-aware design.
maturity: incubating
supported_runtimes:
  - codex
  - openclaw
asset_kinds:
  - skill
  - workflow
  - template
  - safety
  - eval
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
```
