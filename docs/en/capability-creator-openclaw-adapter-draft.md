# Capability Creator OpenClaw Adapter Draft

Status: source of truth
Language: English
Last updated: 2026-03-26

```yaml
runtime: openclaw
capability: capability-creator
materialize:
  copies:
    - from: core/skill.md
      to: skills/capability-creator/SKILL.md
    - from: core/workflow.md
      to: workflows/capability-creator.md
    - from: core/template.md
      to: templates/capability-creator-template.md
    - from: core/safety.md
      to: safety/capability-creator.md
post_install:
  - type: exists
    path: skills/capability-creator/SKILL.md
```
