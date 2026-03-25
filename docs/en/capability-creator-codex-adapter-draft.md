# Capability Creator Codex Adapter Draft

Status: source of truth
Language: English
Last updated: 2026-03-26

```yaml
runtime: codex
capability: capability-creator
materialize:
  copies:
    - from: core/skill.md
      to: skills/capability-creator/SKILL.md
    - from: core/workflow.md
      to: skills/capability-creator/workflow.md
    - from: core/template.md
      to: skills/capability-creator/template.md
    - from: core/safety.md
      to: skills/capability-creator/safety.md
post_install:
  - type: exists
    path: skills/capability-creator/SKILL.md
```
