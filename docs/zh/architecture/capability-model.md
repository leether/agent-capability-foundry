# Capability 模型

状态：派生文档
语言：简体中文
英文真源：[capability-model.md](../en/architecture/capability-model.md)
最后更新：2026-03-26

## 用途

这份文档定义 `agent-capability-foundry` 的对象模型。

它要回答的是：

- 什么是 capability
- capability 和 skill 有什么区别
- runtime portability 如何成立
- install、validation、evolution 如何挂到这个模型上

这份文档受以下设计理念约束：

- [design-philosophy.md](../design-philosophy.md)

## 所处阶段

这份文档属于：

- `Phase 3: Capability Contract Lock`

它应被视为一份 contract 设计文档，而不是实现说明。

在这个阶段：

- installer 实现不在范围内
- public export 不在范围内
- schema 形状和边界规则在范围内

## 核心主张

`agent-capability-foundry` 应当使用 `capability` 作为顶层 package 单位。

`capability` 不是 runtime-native skill 的同义词。

一个 capability 是一个可移植的 bundle，它可以被物化成一个或多个
runtime-native 资产，例如：

- skill
- workflow 定义
- safety policy
- knowledge bundle
- eval suite
- templates

## 为什么要用 Capability 而不是 Skill

`skill` 作为仓库顶层对象太窄，因为它通常只描述一个可用 agent 方法中的一部分：

- 角色
- 触发条件
- 行为
- 有时会包含输出形状

但一个真正可复用的方法通常还需要：

- runtime-specific placement
- validation
- safety rules
- examples
- workflow context
- evolution 和 maturity metadata

所以：

- `skill` 是一种 asset kind
- `capability` 是 package 和 distribution unit

## 对象分层

仓库应区分四层：

1. 仓库层
2. Capability 层
3. Asset 层
4. Runtime materialization 层

### 1. 仓库层

仓库层提供：

- curation policy
- capability catalog
- localization policy
- runtime portability model
- installer surface

### 2. Capability 层

Capability 是稳定的用户可见单位。

用户应通过 capability ID 安装，而不是通过单个资产文件安装。

例子：

- `retrospective-cognition`

### 3. Asset 层

一个 capability 可以包含多种 asset kind。

初始支持的 asset kind 应包括：

- `skill`
- `workflow`
- `knowledge`
- `safety`
- `eval`
- `template`
- `example`

### 4. Runtime materialization 层

每个 runtime 只接收它能理解的 native form。

例如：

- `Codex` 可能接收一个 `SKILL.md` 加若干 supporting files
- `OpenClaw` 可能接收一个类 skill 资产，再加 workflow 或配置文件

## 可移植性模型

可移植性模型应是：

- `core + thin adapters`

### Core

`core` 承载 runtime-agnostic 的 intent 和共享资产。

Core 应包含：

- canonical meaning
- asset inventory
- public-safe wording
- validation intent
- maturity state

Core 不应包含：

- runtime-specific install paths
- runtime-specific directory conventions
- runtime-specific hidden assumptions

### Thin adapters

Adapter 表达的是：某个 runtime 应如何接收这个 capability。

Adapter 必须保持很薄。

允许的 adapter 职责：

- copy
- render
- omit
- post-install validate

禁止的 adapter 行为：

- 静默重定义 capability 的含义
- 变成 capability 的第二份完整拷贝
- 引入深层继承链

## Capability Contract

每个 capability 都应提供一个 runtime-agnostic manifest。

建议的最小字段：

```yaml
id: retrospective-cognition
name: Retrospective Cognition
version: 0.1.0
summary: Turn completed work into reusable internal cognition assets.
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
entrypoints:
  default: core/skill.md
install_contract:
  mode: materialize
validation_contract:
  mode: post_install_checks
```

这个 manifest 应描述“它是什么”，而不是描述“某个 runtime 如何实现它”。

## Adapter Contract

每个 runtime adapter 只应提供 runtime-specific transformation。

建议的最小字段：

```yaml
runtime: codex
capability: retrospective-cognition
materialize:
  copies:
    - from: core/skill.md
      to: skills/retrospective-cognition/SKILL.md
  renders: []
  omissions: []
post_install:
  - type: exists
    path: skills/retrospective-cognition/SKILL.md
```

对于另一个 runtime：

```yaml
runtime: openclaw
capability: retrospective-cognition
materialize:
  copies:
    - from: core/skill.md
      to: skills/retrospective-cognition/SKILL.md
    - from: core/workflow.md
      to: workflows/retrospective-cognition.md
  renders: []
  omissions: []
post_install:
  - type: exists
    path: skills/retrospective-cognition/SKILL.md
```

这些例子只表达结构，不是最终路径承诺。

## 安装模型

v1 的安装模型应当是：

- 按 capability ID 安装
- runtime 必须显式指定
- 支持 `dry-run`
- 支持 `apply`
- 物化 runtime-native 文件
- 运行 post-install validation

这个模型不应依赖：

- 隐式 runtime auto-detection
- 隐藏 mutation
- 不透明 fallback 行为

这样既能保持 user-friendly，又不会误导用户。

## 验证模型

Validation 从第一天起就是 capability 模型的一部分。

每个 capability 都应定义：

- 什么叫安装成功
- 哪些最小 post-install checks 必须通过
- v1 还有哪些范围外内容

验证类型可以包括：

- 文件存在检查
- shape 检查
- runtime-native smoke checks
- 文档对齐检查

## 成熟度模型

Capability 不能伪装成比自己更稳定的状态。

初始 maturity states 应包括：

- `incubating`
- `curated`
- `production-tested`
- `deprecated`

成熟度模型的作用是：在不破坏自洽性的前提下支持自进化。

## 双语约束

Capability 模型必须遵守仓库级本地化规则：

- 英文是真源
- 中文是派生

这意味着：

- 规范性的 capability 语义必须先用英文编写
- 中文 capability 文档可以解释和翻译
- 中文文档不能成为独立的 canonical contract

## 第一批 Runtime 约束

第一批 runtime 是：

- `codex`
- `openclaw`

`OpenClaw` 不是未来占位符。

它必须在初始 capability 模型里被当作一等目标，而不是在 `Codex` 之后再补。

## 自进化约束

模型本身允许演化。

但对模型的修订必须满足：

- 显式
- 有文档
- 有版本
- 能被具体 mismatch、blind spot 或新需求所证明

Capability 文档、adapter 行为、installer 行为之间不能通过静默分叉来演化。

## V1 非目标

这个模型不要求 v1 解决：

- 所有可能的 runtime
- automatic runtime detection
- 所有可能的本地化目标
- 每一种 asset kind 的最终成熟形态

V1 只需要：

- 一个自洽的 core model
- 一个自洽的 adapter model
- 一个初始 capability
- 对 `codex` 和 `openclaw` 的一等支持

## 通往下一阶段的门控

只有在以下条件也满足时，这份文档才足以支持跨到下一阶段：

- curation policy 已经写好
- evolution policy 已经写好
- 第一 capability 能在这个模型下被描述且不存在隐藏例外

只有这样，工作才应该继续推进到 installer 设计。
