# Capability Creator 验证示例

状态：派生文档
语言：简体中文
英文真源：[capability-creator-validation-example.md](../en/capability-creator-validation-example.md)
最后更新：2026-03-26

## 验证意图

只有当输出包含以下内容时，才应被视为有效：

- 显式意图
- 显式阶段
- 各阶段约束
- 门控标准
- 当前阶段判断
- 英文真源 / 中文派生规则

## 失败示例

如果输出出现以下情况，则验证失败：

- 只给出没有门控的泛化计划
- 跳过阶段判断
- 在早期设计阶段就混入实现承诺
- 把本地化当成事后可选项
