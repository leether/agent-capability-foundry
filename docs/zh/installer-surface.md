# Installer Surface

状态：派生文档
语言：简体中文
英文真源：[installer-surface.md](../en/installer-surface.md)
最后更新：2026-03-26

## 用途

这份文档定义 `agent-capability-foundry` 的 v1 用户安装面。

它的目标是在不靠 silent magic 隐藏 runtime-specific complexity 的前提下，让安装行为做到：

- predictable
- explicit
- portable
- user-friendly

## 所处阶段

这份文档属于：

- `Phase 4: Installability Lock`

在这个阶段：

- installer behavior 在范围内
- installer implementation 仍不在范围内
- public export 仍不在范围内

## 设计目标

用户应按 capability ID 安装，而不是按 asset file 安装。

用户不应被要求理解：

- core 与 adapter 的内部区别
- file layout
- asset kinds

用户只需要知道：

- 自己想装什么 capability
- 目标 runtime 是什么
- 要的是 `dry-run` 还是 `apply`

## 规范命令形状

推荐的 v1 命令形状：

```bash
agent-capability-foundry install retrospective-cognition --runtime codex --dry-run
agent-capability-foundry install retrospective-cognition --runtime openclaw --apply
```

## Installer 必需行为

v1 的 installer 行为应包括：

- 按 capability ID 安装
- 显式 `--runtime`
- 显式 `--dry-run`
- 显式 `--apply`
- runtime-native materialization
- post-install validation

v1 的 installer 行为不应包括：

- 隐式 runtime auto-detection
- hidden mutation
- 静默 fallback 到另一种 runtime 模式
- 会改变 capability 含义的 runtime-specific 行为

## 为什么 v1 必须显式指定 Runtime

v1 必须显式指定 runtime，因为：

- `codex` 和 `openclaw` 都是一等 target
- 在模型仍处于 incubating 时，用户信任比“假装环境永远能被正确推断”更重要
- 显式参数能降低 surprise

这仍然满足“低摩擦”目标，因为跨 runtime 保持稳定的是 capability ID。

变化的只有：

- `--runtime codex`
- `--runtime openclaw`

## 用户可见 Contract

用户可见 contract 应是：

1. capability 名称保持稳定
2. install command shape 保持稳定
3. runtime 是一个参数，而不是另一种产品
4. installer 在 apply 之前会说明将要 materialize 什么

这样就能在不强行制造底层文件完全相同的前提下，保持用户跨 runtime 的连续性。

## Dry-Run Contract

`--dry-run` 应展示：

- 选中的 capability
- 选中的 runtime
- 将会 materialize 的文件或目录
- 将要运行的 validation checks
- 缺失的 prerequisites

`--dry-run` 不应修改目标环境。

## Apply Contract

`--apply` 应：

- materialize runtime-native assets
- 运行最小 validation checks
- 清楚报告 success、warning 或 failure

`--apply` 不应：

- 静默跳过声明过的 validation
- 静默选择另一种 runtime shape
- 安装未文档化的 side effects

## Validation Contract

安装后的最小 validation path 应包括：

- structural existence checks
- runtime-target shape checks
- 在可能的情况下至少一项 minimal smoke check

对 v1 来说，success 不意味着：

- full production proof

对 v1 来说，success 意味着：

- capability 正确 materialize
- 目标 runtime 收到了预期资产形态
- 结果与声明过的 contract 一致

## 可移植性规则

Installer surface 必须保留仓库模型：

- 一个 capability
- 多个 runtime adapters

它不能把这个模型压扁成：

- 每个 runtime 一个独立 pseudo-capability

否则长期会削弱自洽性，也会提高用户困惑。

## 失败规则

如果某个 runtime 不能在不重定义 capability 的前提下接收它，installer 应显式失败，而不是假装成功。

这说明出现了以下问题之一：

- adapter 有问题
- capability boundary 有问题
- portability claim 有问题

## 通往下一阶段的门控

只有在以下条件都成立时，这个阶段才应被视为通过：

- installer surface 在 contract 层已被冻结
- `retrospective-cognition` 能在概念上安装到：
  - `codex`
  - `openclaw`
- validation expectations 清楚
- 不存在违反用户命令模型的 hidden runtime-specific exception
