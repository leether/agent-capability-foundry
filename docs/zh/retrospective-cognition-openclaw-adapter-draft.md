# Retrospective Cognition OpenClaw Adapter 草案

状态：派生文档
语言：简体中文
英文真源：[retrospective-cognition-openclaw-adapter-draft.md](../en/retrospective-cognition-openclaw-adapter-draft.md)
最后更新：2026-03-26

## 用途

这份文档给出 `retrospective-cognition` 面向以下 runtime 的 materialization 草案：

- `openclaw`

## Adapter 草案

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

## Adapter 意图

这份 adapter 假定 `openclaw` 应同时接收一个类 skill 的触发面和一份独立 workflow 形态的资产。

Capability 的含义仍留在 core 中。

Adapter 只治理交付方式。

## 与门控的关系

这份草案用于帮助满足 `Phase 3: Capability Contract Lock`。
