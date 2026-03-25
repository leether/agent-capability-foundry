# Retrospective Cognition Skill 资产

状态：派生文档
语言：简体中文
英文真源：[retrospective-cognition-skill-asset.md](../en/retrospective-cognition-skill-asset.md)
最后更新：2026-03-26

## 用途

这个 skill 用于在一轮有意义的工作结束后，把结果沉淀成 durable cognition assets，而不是只停留在 chat context 中。

## 触发条件

当出现以下情况时使用这个 skill：

- 一轮 debugging 或 rollout 完成
- 暴露出 repeated blocker
- 某个稳定的 user correction 需要持久化
- 某个任务到了应跨会话保留的 checkpoint

## 核心动作

1. 重载相关 source-of-truth documents。
2. 把 verified state 和 inference 分开。
3. 识别什么应该保留、什么不应保留。
4. 写下能保存经验的最小 durable artifact。
5. 只有稳定经验才向 canonical layers 提升。

## Guardrails

- 不要把内部私有细节混入 public-safe artifacts。
- 没有证据时，不要把一次性观察提升成稳定规则。
- 不要把 narrative recap 误当成 durable cognition。
