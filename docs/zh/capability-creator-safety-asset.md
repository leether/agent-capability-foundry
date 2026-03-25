# Capability Creator Safety 资产

状态：派生文档
语言：简体中文
英文真源：[capability-creator-safety-asset.md](../en/capability-creator-safety-asset.md)
最后更新：2026-03-26

## Safety Rules

- 不要把设计讨论、实现和发布压成一个没有区分的步骤。
- 在门控未检查前，不要宣称某个阶段已通过。
- 不要发布只有中文的规范性内容。
- 不要让 runtime-specific convenience 覆盖 capability contract。
- 不要把私有建仓历史直接当成公开 capability，除非它已被改写为可复用方法。
- 不要把共享 git 元数据的 worktree 当成独立公开仓。
- 在仓库身份隔离未验证前，不要绑定公开 remote。
