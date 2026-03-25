# Retrospective Cognition 资产清单

状态：派生文档
语言：简体中文
英文真源：[retrospective-cognition-asset-inventory.md](../en/retrospective-cognition-asset-inventory.md)
最后更新：2026-03-26

## 用途

这份文档列出第一项 capability 所需的最小 public-safe 资产集：

- `retrospective-cognition`

它的作用是防止这个 capability 变成一个空心壳。

## V1 最小资产清单

第一批 public-safe 资产至少应包括：

- `skill`
  - 主触发面和行为面
- `workflow`
  - 有序 retrospective procedure
- `template`
  - 可复用输出模板
- `safety`
  - public-safe redaction 与边界规则
- `eval`
  - 一个最小 validation example
- `example`
  - 一个 good output example 和一个 bounded failure example

## 英文真源资产

英文真源资产至少应包括：

- `docs/en/design-philosophy.md`
- `docs/en/architecture/capability-model.md`
- `docs/en/curation-policy.md`
- `docs/en/evolution-policy.md`
- `docs/en/retrospective-cognition-capability-spec.md`
- `docs/en/retrospective-cognition-manifest-draft.md`
- `docs/en/retrospective-cognition-codex-adapter-draft.md`
- `docs/en/retrospective-cognition-openclaw-adapter-draft.md`
- `docs/en/installer-surface.md`

## 中文派生资产

中文派生资产应包含上述公开入口文档对应的 companion docs。

## 在 Public Export 之前仍缺的资产

在首次 public export 之前，仍然需要：

- 一份具体 public-safe `skill` asset file
- 一份具体 `workflow` asset file
- 一份具体 `template` asset file
- 一份具体 `safety` asset file
- 一个最小 public validation example
- 一组最小 good/bad output examples

## 与门控的关系

这份清单的作用是让 `Phase 4` 及以后阶段不至于空转。

如果第一 capability 缺少最小 public-safe 资产集，项目就不应宣称自己已经具备安装就绪或公开发布就绪状态。
