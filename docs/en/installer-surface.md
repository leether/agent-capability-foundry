# Installer Surface

Status: source of truth
Language: English
Last updated: 2026-03-26

## Purpose

This document defines the v1 user-facing installer surface for
`agent-capability-foundry`.

Its goal is to make installation:

- predictable
- explicit
- portable
- user-friendly

without hiding runtime-specific complexity behind silent magic.

## Stage Context

This document belongs to:

- `Phase 4: Installability Lock`

At this stage:

- installer behavior is in scope
- actual installer implementation is still out of scope
- public export is still out of scope

## Design Goal

Users should install by capability ID, not by asset file.

Users should not need to understand:

- core vs adapter internals
- file layout
- asset kinds

Users should only need to know:

- what capability they want
- which runtime they are targeting
- whether they want `dry-run` or `apply`

## Canonical Command Shape

Recommended v1 command shape:

```bash
agent-capability-foundry install retrospective-cognition --runtime codex --dry-run
agent-capability-foundry install retrospective-cognition --runtime openclaw --apply
```

## Required Installer Behaviors

V1 installer behavior should include:

- install by capability ID
- explicit `--runtime`
- explicit `--dry-run`
- explicit `--apply`
- runtime-native materialization
- post-install validation

V1 installer behavior should not include:

- implicit runtime auto-detection
- hidden mutation
- silent fallback to another runtime mode
- runtime-specific behavior that changes capability meaning

## Why Runtime Must Be Explicit In V1

Explicit runtime selection is required because:

- `codex` and `openclaw` are both first-class targets
- user trust is more important than pretending the environment can always be
  inferred correctly
- explicitness reduces surprise while the model is still incubating

This still satisfies the "low-friction" goal because the capability ID remains
stable across runtimes.

What changes is only:

- `--runtime codex`
- `--runtime openclaw`

## User-Facing Contract

The user-facing contract should be:

1. the capability name stays stable
2. the install command shape stays stable
3. the runtime is a parameter, not a different product
4. the installer explains what it will materialize before applying changes

This preserves user continuity across runtimes without forcing false sameness in
the underlying filesystem result.

## Dry-Run Contract

`--dry-run` should show:

- selected capability
- selected runtime
- files or directories that would be materialized
- validation checks that would be run
- any missing prerequisites

`--dry-run` should not mutate the target environment.

## Apply Contract

`--apply` should:

- materialize the runtime-native assets
- run the minimum validation checks
- report success, warning, or failure clearly

`--apply` should not:

- silently skip declared validation
- silently choose another runtime shape
- install undocumented side effects

## Validation Contract

After install, the minimum validation path should include:

- structural existence checks
- runtime-target shape checks
- one minimal smoke check where possible

For v1, success does not mean:

- full production proof

For v1, success means:

- the capability materializes correctly
- the target runtime receives the expected asset shape
- the result is consistent with the declared contract

## Portability Rule

The installer surface should preserve the repository model:

- one capability
- many runtime adapters

It must not flatten the model into:

- one separate pseudo-capability per runtime

That would weaken coherence and increase user confusion over time.

## Failure Rule

If a runtime cannot accept the capability without redefining it, the installer
should fail explicitly instead of pretending success.

That is evidence of one of:

- a bad adapter
- a bad capability boundary
- a bad portability claim

## Gate To The Next Phase

This phase should be considered passed only if:

- the installer surface is frozen at the contract level
- `retrospective-cognition` can be installed conceptually for:
  - `codex`
  - `openclaw`
- validation expectations are clear
- no hidden runtime-specific exception violates the user-facing command model
