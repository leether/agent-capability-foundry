# Capability Creator Capability 规范说明

状态：派生文档
语言：简体中文
英文真源：[capability-creator-capability-spec.md](../en/capability-creator-capability-spec.md)
最后更新：2026-03-26

## 用途

这份文档描述第二项计划公开的 capability：

- `capability-creator`

它的作用是通过一个显式工作流，把初始意图转化为受治理约束的 capability 设计，而不是靠临时性的零散起草。

## Capability ID

- `capability-creator`

## 摘要

通过以下结构把一个意图转化为受治理约束的 capability：

- 边界定义
- 阶段划分
- 各阶段约束
- 跨阶段门控
- 英文真源 / 中文派生文档
- runtime-aware adapter 规划
- release-topology isolation checks
- validation expectations

## 预期用途

在以下情况使用这个 capability：

- 出现了一个新的 capability 想法
- 这个想法需要被做成可复用 package，而不是零散笔记
- 仓库需要一条从概念到 public-safe capability 的结构化路径

## 非目标

这个 capability 不应被当成：

- 没有门控的通用 brainstorming assistant
- 仓库搭建日志
- 自动代码生成器
- public-safety review 的替代物
- runtime-specific adapter 设计的替代物

## 核心本质

这项 capability 的本质是一个 workflow。

它是一个用来创建其他 capability 的元 capability。

它的输出不只是文本。

它的输出应是一个有边界的 capability package 设计，其中包含显式阶段、约束和门控。

## 核心 Workflow 语义

这项 capability 应保持以下语义：

1. 从意图开始
2. 定义边界
3. 把工作切成阶段
4. 为每个阶段定义约束
5. 定义跨阶段门控
6. 未过门时禁止跳阶段
7. 先英文真源，再中文派生
8. 要求 runtime-aware capability 建模
9. 在公开 push 前要求 release-topology 检查
10. 在提升前要求 validation

## Runtime Targets

第一批 runtime targets：

- `codex`
- `openclaw`

## 成熟度

建议的初始 maturity：

- `incubating`

原因：

- 这套 workflow 已经在被成功实践
- 但它的 public-safe 包装与可复用资产面还需要重复验证

## 资产形状

这项 capability 计划包含：

- `skill`
- `workflow`
- `template`
- `safety`
- `eval`
- `example`

## Public-Safety 约束

这项 capability 的公开版本必须描述 workflow pattern，但不能依赖：

- 私有 repo 路径
- 私有 mailbox 机制
- 私有主机或操作员命名
- 私有内部操作证据

它还必须区分：

- 内容层的隔离工作面
- 仓库身份层的隔离

如果公开导出需要绑定一个不同于私有源仓的 remote，那么 shared-git-metadata
worktree 不能被当作足够的隔离。

## 发布拓扑约束

在 capability 生成的仓库被公开推送之前，必须验证：

- 导出目标是否是独立 git 仓库
- `.git` 指向的是共享元数据还是独立仓
- `git rev-parse --git-common-dir` 是否与私有源仓共享
- 绑定公开 remote 是否会连带修改私有源仓的 remote 配置

这个 workflow 必须把“内容隔离”和“仓库身份隔离”视为两道不同的门。

## 验证预期

这项 capability 应验证结果设计中是否包含：

- 显式意图
- 已命名阶段
- 各阶段约束
- 跨阶段门控
- 英文真源 / 中文派生规则
- runtime-aware capability 规划
- release-topology isolation checks
- 显式下一道门的判断

对于可能公开导出的仓库，还应检查：

- `.git`
- `git rev-parse --git-common-dir`
- `git remote -v`
- 导出目标是否可以安全绑定公开 remote

## 当前门控评估

按当前仓库规则，这项 capability 的状态是：

- 边界是否明确：
  - 是
- 对初始公开建模来说是否足够完备：
  - 是，在 specification layer 上成立
- 是否已完全 materialized 可安装：
  - 否
- 是否已可 public export：
  - 否
