# Retrospective Cognition Safety 资产

状态：派生文档
语言：简体中文
英文真源：[retrospective-cognition-safety-asset.md](../en/retrospective-cognition-safety-asset.md)
最后更新：2026-03-26

## Safety Rules

- 不要在 public-safe artifacts 中暴露 private paths、hosts、tokens 或内部标识符。
- 除非理解这个方法确实需要，否则不要把 internal coordination detail 移到 public-facing output。
- 保留 user corrections 和 lessons，但要去掉 private operational context。
- 如果一条经验依赖 private infrastructure，就把它改写到 pattern 层；如果做不到，就不要放进 public surface。
- 如果 public-safe rewriting 会扭曲真实方法，就暂时不要发布这个 artifact。

## Approval Rule

如果不确定某个细节是否 public-safe，默认先排除，直到存在更干净的改写。
