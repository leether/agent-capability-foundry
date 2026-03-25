# Capability Creator OpenClaw Adapter 草案

状态：派生文档
语言：简体中文
英文真源：[capability-creator-openclaw-adapter-draft.md](../en/capability-creator-openclaw-adapter-draft.md)
最后更新：2026-03-26

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
