# Retrospective Cognition Capability 规范说明

状态：派生文档
语言：简体中文
英文真源：[retrospective-cognition-capability-spec.md](../en/retrospective-cognition-capability-spec.md)
最后更新：2026-03-26

## 用途

这份文档描述第一项计划公开的 capability：

- `retrospective-cognition`

它的作用是证明：在当前的策略和 capability 模型下，我们已经可以描述一个真实 capability，而不需要隐藏例外。

## Capability ID

- `retrospective-cognition`

## 摘要

通过把以下几类内容分开，把一次已完成的工作沉淀成可复用的 cognition assets：

- 什么是已验证的
- 什么是被误读的
- 什么应该持久保存
- 什么不应进入 canonical surface

## 预期用途

这个 capability 面向这样的 agent 或 operator workflow：

- 一轮有意义的工作刚刚完成
- 其结果不应只留在 chat context 中

典型场景包括：

- debugging 之后的沉淀
- rollout checkpoint 的记录
- repeated blocker 的抽取
- user correction 的持久化
- 从完成的任务中提炼可复用模式

## 非目标

这个 capability 不应被当成：

- 通用 journaling system
- 无限制 memory dump
- external storytelling workflow
- 任务执行本身的替代物
- public-safe editorial review 的替代物

## 资产形状

这项 capability 计划包含以下 asset kinds：

- `skill`
- `workflow`
- `knowledge`
- `safety`
- `eval`
- `template`
- `example`

### 为什么需要这些 asset kinds

- `skill`
  - 用于表达 capability 应何时触发、如何触发
- `workflow`
  - 用于表达 retrospective 的有序过程
- `knowledge`
  - 用于说明稳定经验应该写到哪里、不应该写到哪里
- `safety`
  - 用于防止私有 internal cognition 泄露到 public artifacts
- `eval`
  - 用于检查输出是否真的结构化、有边界、且有用
- `template`
  - 用于让 capability 可重复使用
- `example`
  - 用于展示好输出和坏输出

## Runtime Targets

第一批 runtime targets：

- `codex`
- `openclaw`

这两个 runtime 必须从 v1 起就被当作一等对象。

## 成熟度

建议的初始 maturity：

- `incubating`

原因：

- 这个方法已经显示出价值，而且已经能用
- 但 public-safe 形态、adapter 形状和 validation expectations 还没有经过重复的公开使用验证

## Core Semantics

无论 runtime-native file shape 如何不同，这项 capability 都应保持以下核心语义：

1. 重载相关的 source-of-truth layers
2. 把 verified state 和 inference 分开
3. 识别什么应该持久保存
4. 写下能保存经验的最小 durable artifact
5. 只有在经验足够稳定时才向上提升
6. 把 external storytelling 和 internal cognition 分开

## Public-Safety 约束

这项 capability 的公开版本不能默认依赖：

- 私有 repository 名称
- 私有 mailbox 或 coordination 路径
- 私有 machine 名称
- 私有 user identity
- 私有 operational incidents

公开版可以描述这种模式。

但不能依赖未公开的内部基础设施才能被理解。

## 双语约束

这项 capability 遵守仓库规则：

- 英文是 canonical
- 中文是派生

这意味着：

- 这份英文文档才是规范性真源
- 中文 companion 文档可以解释，但不能重定义 capability 语义

## 可移植性约束

这项 capability 必须始终能表达为：

- 一个 runtime-agnostic core meaning
- 若干 thin runtime-specific adapters

如果某个 runtime 需要的不是“适配交付方式”，而是“重写方法本身”，那就说明 capability 边界需要被重新审视。

## 验证预期

只有当以下条件都能被检查时，这项 capability 才能最终被视为有效：

- trigger condition 可理解
- retrospective output 能把 verified facts 和 inference 分开
- 输出能区分 durable lessons 和 temporary noise
- public-safe version 不泄露 private context
- 结果 artifacts 能干净地映射到仓库规定的层

## 当前门控评估

按照当前仓库规则，这项 capability 的状态是：

- 边界是否明确：
  - 是
- 对初始公开建模来说是否足够完备：
  - 是，在 specification layer 上成立
- 是否已经能在当前的 contract / curation / evolution 规则下被描述且不
  需要隐藏例外：
  - 是，在 draft layer 上成立
- 是否已经完全 materialized 可安装：
  - 否
- 是否已经可以 public export：
  - 否

## 仍阻塞下一阶段的内容

这项 capability 仍需要：

- 一份 public-safe asset inventory
- 一个最小 validation example
- 面向 `Phase 4` 的 installer contract 工作

在当前的 draft layer 上，`Phase 3` 的文档门控已经可以被视为基本满足。
