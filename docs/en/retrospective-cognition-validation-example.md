# Retrospective Cognition Validation Example

Status: source of truth
Language: English
Last updated: 2026-03-26

## Purpose

This document defines one minimal validation example for the first capability:

- `retrospective-cognition`

## Validation Intent

The goal is to validate that the capability output is not just verbose text.

It should prove that the output can separate:

- verified state
- misread state
- durable lesson
- current operating rule

## Minimal Example

### Input situation

- A workflow round finished
- A repeated mistake was detected
- A stable correction was identified

### Expected output properties

The output should contain:

1. what is verified
2. what was misread
3. what should persist
4. what file or layer should hold the lesson

### Failure example

The output fails validation if it:

- only writes a narrative summary
- mixes verified facts and inference
- stores private context in a public-safe artifact
- promotes a one-off observation as a stable rule without evidence

## Gate Relevance

This minimal example is enough to prove that the capability has a validation
surface.

It is not yet a full eval suite.
