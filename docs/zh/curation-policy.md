# 收录策略

状态：派生文档
语言：简体中文
英文真源：[curation-policy.md](../en/curation-policy.md)
最后更新：2026-03-26

## 用途

这份文档定义 `agent-capability-foundry` 如何决定什么内容可以进入 curated
public repository，什么内容不能进入。

目标不是追求数量最大化。

目标是保护：

- 完备性
- 自洽性
- 自进化纪律
- public safety

## 范围

这份策略治理：

- capability 收录
- public-safe wording 要求
- maturity expectations
- 双语发布要求
- 排除与弃用决策

这份策略不治理：

- 私有内部笔记
- 还未进入 curated public surface 的临时探索材料
- 超出 public portability 所必需范围之外的 runtime-specific 实现细节

## 收录原则

`agent-capability-foundry` 是 curated 的，不是 exhaustive 的。

这意味着：

- 一个 capability 只有在它有用、边界清楚、可解释，并且与仓库模型结构兼容时，才应进入公开仓库

这个仓库不应成为：

- 所有内部 prompts 的倾倒处
- 私有 workflow 的原样镜像
- 一堆半翻译笔记的集合
- 长期保留未解决矛盾的坟场

## 收录测试

一个 capability 只有在以下条件全部成立时，才可以进入 curated public surface。

### 1. 边界明确

Capability 必须清楚说明：

- 它解决什么问题
- 它不解决什么问题
- 它支持哪些 runtime target
- 它目前处于什么 maturity level

### 2. 在其声明范围内足够完备

在它所声明的范围内，这个 capability 必须包含足够的结构，使其在操作上有意义。

可能包括：

- skill content
- workflow framing
- safety rules
- validation
- examples
- adapter guidance

它不需要一开始就覆盖所有 asset kind。

但它不能一边宣称自己是完整可复用的方法，一边缺失这个方法的关键层。

### 3. 与仓库结构保持自洽

这个 capability 不能和以下内容冲突：

- 仓库的 `capability` 模型
- `core + thin adapters` portability model
- installer contract
- 英文真源 / 中文派生规则
- maturity model

### 4. 通过 public-safety 审查

Capability 不能依赖私有上下文才能被正确理解。

它必须排除或中和以下内容：

- 私有绝对路径
- 被当作隐藏前提的私有 repo 名
- 私有 hostname
- 私有凭证、token、key 或 endpoint
- internal-only coordination assumptions
- 在公开版中并不必要的内部用户身份或敏感运维细节

### 5. 英文真源存在

每一个进入 curated public surface 的 capability，都必须先有英文规范文档。

英文是真正的 source of truth。

### 6. 第一波公开文档必须有中文派生版本

因为 v1 是双语的，所以对外的入口文档必须也有中文派生版本。

中文可以解释和翻译。

中文不能静默重定义 policy 或 contract 的语义。

### 7. 必须存在验证方式

一个公开 capability 至少要定义一种验证方式。

例如：

- structural validation
- file-shape validation
- runtime materialization validation
- post-install smoke checks
- documentation parity checks

### 8. 演化状态必须明确

如果一个 capability 仍处于演化中，这个事实必须通过 maturity 和
revision status 显式呈现出来。

仓库可以收录仍在演化的 capability。

但不能把未解决的实验性内容伪装成稳定 canon。

## 排除测试

如果出现以下任意情况，一个 capability 就应被排除在 curated public
surface 之外：

- 它依赖无法干净移除的私有上下文
- 它存在未版本化、未解释的矛盾
- 它只是一个薄薄的 prompt 碎片，没有形成边界清楚的方法
- 它无法被翻译进仓库的 portability model
- 它无法解释成功、失败或 non-goals
- 它没有 public-safe validation path
- 它会误导用户对其当前 maturity 的理解

## 双语规则

仓库采用：

- 英文真源
- 中文派生

这条策略意味着：

- 规范性文档必须先用英文写
- 第一波公开入口文档中的中文必须保持结构对应
- 翻译漂移属于收录失败，不是小问题

## 成熟度规则

Curated 内容应通过 maturity 标记，而不是被强行伪装成同一种稳定度。

初始 maturity states：

- `incubating`
- `curated`
- `production-tested`
- `deprecated`

这样才能在不破坏自洽性的前提下支持自进化。

## 矛盾规则

矛盾并不总是意味着这个 capability 必须被丢弃。

但矛盾绝不能以隐藏歧义的方式被夹带进 curated surface。

如果存在矛盾，这个 capability 必须满足下列之一：

- 留在 curated surface 之外
- 先修订再收录
- 带着明确的 maturity 和 revision context 被收录

## V1 最小公开 Capability 标准

在 v1 中，第一项 capability `retrospective-cognition` 只有在至少满足以下条件时才可以公开：

- 有清楚的英文真源文档集
- 对公开入口文档有中文派生文档集
- 有一份 runtime-agnostic capability 描述
- 对以下 runtime 进行一等对待：
  - `codex`
  - `openclaw`
- 有 validation expectations
- 有 public-safe wording
- 有可见的 maturity state

## 弃用规则

如果一个 capability 在结构上已经过时、会误导用户、或者被后续能力取代，仓库应优先采用：

- 显式 deprecation
- successor linkage
- 保留历史

仓库不应通过静默覆盖来抹掉用户对旧 capability 含义的理解。

## 通往下一阶段的门控

这份策略用于满足 `Phase 2: Public Safety Lock`。

只有在以下条件全部成立时，这个阶段才应被视为通过：

- 这份策略存在
- 双语规则存在
- design philosophy 存在
- capability model 存在
- 第一 capability 能在这份策略下被评估，且不存在隐藏例外
