# Retrospective Cognition Manifest 草案

状态：派生文档
语言：简体中文
英文真源：[retrospective-cognition-manifest-draft.md](../en/retrospective-cognition-manifest-draft.md)
最后更新：2026-03-26

## 用途

这份文档给出第一份 runtime-agnostic manifest 草案，对象是：

- `retrospective-cognition`

它是一份 contract 草案，还不是最终文件格式承诺。

## Manifest 草案

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

## Contract 意图

这份 manifest 的意图是表达：

- capability 的稳定身份
- capability 的 maturity
- 支持哪些 runtime
- 这项 capability 包含哪些 asset kinds
- 安装和验证在最低层面的预期

它不用于表达：

- runtime-specific file paths
- runtime-specific directory conventions
- runtime-specific fallbacks

这些内容属于 adapters。

## 与门控的关系

这份草案用于满足 `Phase 3: Capability Contract Lock` 的一部分要求。

只有在它与以下文档配套时，才能被视为足够：

- 一份 `codex` adapter draft
- 一份 `openclaw` adapter draft
