# 演化策略

状态：派生文档
语言：简体中文
英文真源：[evolution-policy.md](../en/evolution-policy.md)
最后更新：2026-03-26

## 用途

这份文档定义 `agent-capability-foundry` 允许如何变化。

它的目标是让自进化变成可操作的机制，而不是让仓库退化成一堆无声例外或相互矛盾的碎片。

## 范围

这份策略治理：

- 仓库级原则的修订
- capability contract 的修订
- runtime adapter 的修订
- maturity transitions
- contradiction handling
- deprecation 与 successor flow

这份策略不治理：

- 在进入 curated public surface 之前的随手草拟
- public repository 边界之外的私有内部实验

## 核心规则

仓库可以演化。

但仓库只能通过显式修订演化，不能通过 silent drift 演化。

这条规则适用于：

- 文档
- contract
- adapter
- 术语
- capability scope
- maturity claims

## 为什么需要演化

仓库预计会遇到：

- blind spots
- stale assumptions
- runtime differences
- new asset shapes
- new validation needs
- new public-audience requirements

如果仓库禁止修订，它会变得僵硬且误导用户。

如果仓库允许无结构修订，它会失去自洽性。

所以这份策略的目的不是减少变化。

它的目的是把变化结构化。

## 允许触发修订的条件

当以下任一条件成立时，可以触发修订：

- 检测到了矛盾
- 证实了 blind spot
- 当前 contract 无法表达一个有效的新模式
- public-safety rule 缺失或太弱
- 某个 runtime adapter 反复逼出例外
- 某个 maturity label 已经不准确
- 一个更好的结构能明显降低仓库级歧义

## 必需的修订流程

当提出一个重要修订时，仓库应当：

1. 指出被修订的对象
2. 指出变化触发因素
3. 标出受影响的边界
4. 给变化分类
5. 记录修订内容
6. 更新 validation expectations
7. 如有必要，更新 maturity 或 deprecation 状态
8. 恢复到一个新的自洽发布态

## 修订分类

变化应归入以下几类之一：

- `boundary-change`
- `completeness-expansion`
- `coherence-repair`
- `portability-repair`
- `safety-tightening`
- `evaluation-upgrade`
- `deprecation`

分类的目的不是官僚化。

而是防止隐藏的语义漂移。

## 成熟度与演化

成熟度是演化系统的一部分。

初始 maturity states：

- `incubating`
- `curated`
- `production-tested`
- `deprecated`

演化应当显式地穿过这些状态，而不是假装所有内容都同样稳定。

## 矛盾处理

矛盾必须被当成信号，而不是被埋成模糊地带。

当矛盾出现时，仓库应判断它属于：

- 边界问题
- 完备性问题
- 自洽性问题
- 可移植性问题
- 演化问题

可选响应包括：

- 修订受影响的文档或 contract
- 扩大声明边界
- 收紧声明边界
- 把一个 capability 拆成多个边界清楚的 capability
- 把该 capability 降到更低 maturity
- 弃用当前形态并定义 successor

## 禁止的演化模式

仓库不能通过以下方式演化：

- 静默重定义 canonical terms
- 通过未记录的 adapter-specific 行为改变 capability 含义
- 让中文和英文漂移成两套不同的规范性真相
- 在公开文档中长期保留互相矛盾的内容而不说明修订上下文
- 在改变 public contract semantics 时跳过验证
- 把实验性行为伪装成稳定 canon

## 最小修订资产

对于有意义的变化，至少应存在以下资产：

- 更新后的 canonical document
- 必要时更新后的派生语言文档
- 行为变化时更新的 validation expectation
- 稳定性变化时更新的 maturity state
- 替换发生时更新的 successor 或 deprecation note

## 与设计理念的关系

这份策略实现的是以下文档中的 self-evolution 约束：

- [design-philosophy.md](../en/design-philosophy.md)

设计理念定义的是：

- 为什么仓库必须演化
- 为什么它在演化时仍必须保持自洽

这份策略定义的是：

- 这种演化具体应该如何发生

## 与收录策略的关系

这份策略应与以下文档一起阅读：

- [curation-policy.md](../en/curation-policy.md)

收录策略决定什么可以进入 curated surface。

演化策略决定 curated surface 如何随着时间变化。

## 阶段门控

这份策略用于满足：

- `Phase 3: Capability Contract Lock`

在以下条件全部成立之前，项目不应进入 installer 设计：

- design philosophy 已存在
- capability model 已存在
- curation policy 已存在
- evolution policy 已存在
- 第一 capability 能在以下三层中被描述且没有隐藏例外：
  - contract
  - curation
  - evolution
