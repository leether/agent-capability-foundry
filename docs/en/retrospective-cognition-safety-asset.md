# Retrospective Cognition Safety Asset

Status: source of truth
Language: English
Last updated: 2026-03-26

## Safety Rules

- Do not expose private paths, hosts, tokens, or internal identifiers in
  public-safe artifacts.
- Do not move internal coordination detail into public-facing output unless it
  is genuinely required for understanding the method.
- Keep user corrections and lessons, but redact private operational context.
- If a lesson depends on private infrastructure, rewrite it at the pattern
  level or keep it out of the public surface.
- If public-safe rewriting would distort the actual method, do not publish the
  artifact yet.

## Approval Rule

If there is doubt about whether a detail is public-safe, default to exclusion
until a cleaner rewrite exists.
