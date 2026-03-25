# agent-capability-foundry

一个 `agent-native`、`capability-oriented` 的 curated repository，用来承载
跨 `Codex`、`OpenClaw` 和其他 runtime surface 的可复用方法。

## 这个仓库是什么

`agent-capability-foundry` 是一个 curated 的公开仓库，用来承载可复用的
agent 方法。

它不只包含 skills。

这个仓库使用：

- `capability` 作为顶层 package unit
- 把 `skill`、`workflow`、`knowledge`、`safety`、`eval`、`template`、
  `example` 作为 capability 内部的 asset kinds

## 为什么不是 Skill-Only

现代 agent 方法通常不止是一份 skill 形态的文档。

它们还需要：

- workflow structure
- safety rules
- validation
- runtime portability
- durable knowledge boundaries

所以这个仓库把这些层一起打包成 capabilities。

## 可移植性模型

这个仓库采用：

- 一个 runtime-agnostic core
- 若干 thin runtime-specific adapters

这样既能保持一个稳定的用户 capability ID，又能让不同 runtime 接收到正确的 native asset shape。

## 语言策略

- 英文是真源
- 中文是派生 companion language

这个仓库从第一天起就是双语，因为首批目标用户同时包含英语用户和中文用户。

## 第一波 Capability

第一波计划公开的 capability 是：

- `retrospective-cognition`
- `capability-creator`

第一项 capability 的目标是把一轮已完成的工作沉淀成 durable cognition
assets，而不是让结果只停留在短暂的 chat context 中。

第二项 capability 的目标是把一个初始想法推进成带阶段、约束和门控的
governed capability 设计。

## 第一批 Runtime

第一批 runtime 是：

- `Codex`
- `OpenClaw`

这两个 runtime 从 v1 起都被当作一等目标。

## 安装面

计划中的 v1 安装形态是：

```bash
agent-capability-foundry install retrospective-cognition --runtime codex --dry-run
agent-capability-foundry install retrospective-cognition --runtime openclaw --apply
```

## 仓库原则

这个仓库由四个核心约束治理：

- Boundary
- Completeness
- Coherence
- Self-evolution

这些原则的作用是让仓库既可用，又能以结构化方式增长。
