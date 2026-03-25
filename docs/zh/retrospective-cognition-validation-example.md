# Retrospective Cognition 验证示例

状态：派生文档
语言：简体中文
英文真源：[retrospective-cognition-validation-example.md](../en/retrospective-cognition-validation-example.md)
最后更新：2026-03-26

## 用途

这份文档定义第一项 capability 的一个最小验证示例：

- `retrospective-cognition`

## 验证意图

它的目标是验证这个 capability 的输出不只是冗长文本。

它应证明输出可以分开：

- verified state
- misread state
- durable lesson
- current operating rule

## 最小示例

### 输入情境

- 一轮 workflow 已完成
- 发现了一个 repeated mistake
- 识别出一个稳定 correction

### 期望输出属性

输出应包含：

1. 什么是已验证的
2. 什么是被误读的
3. 什么应该持久保留
4. 这个经验应落到哪个 file 或 layer

### 失败示例

如果输出出现以下情况，则验证失败：

- 只写了一段 narrative summary
- 把 verified facts 和 inference 混在一起
- 在 public-safe artifact 中保留了 private context
- 在没有证据的情况下，把一次性观察提升成稳定规则

## 与门控的关系

这个最小示例足以证明：这项 capability 具备一个 validation surface。

它还不是完整的 eval suite。
