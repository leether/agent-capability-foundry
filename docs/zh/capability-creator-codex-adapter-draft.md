# Capability Creator Codex Adapter 草案

状态：派生文档
语言：简体中文
英文真源：[capability-creator-codex-adapter-draft.md](../en/capability-creator-codex-adapter-draft.md)
最后更新：2026-03-26

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
