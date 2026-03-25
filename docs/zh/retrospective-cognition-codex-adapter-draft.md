# Retrospective Cognition Codex Adapter 草案

状态：派生文档
语言：简体中文
英文真源：[retrospective-cognition-codex-adapter-draft.md](../en/retrospective-cognition-codex-adapter-draft.md)
最后更新：2026-03-26

## 用途

这份文档给出 `retrospective-cognition` 面向以下 runtime 的 materialization 草案：

- `codex`

## Adapter 草案

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

## Adapter 意图

这份 adapter 假定 `codex` 能消费一个主 skill surface，并且能从同目录 supporting documents 中受益。

Adapter 不重定义 capability 的含义。

它只定义 runtime 应如何接收 capability 资产。

## 与门控的关系

这份草案用于帮助满足 `Phase 3: Capability Contract Lock`。
