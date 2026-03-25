#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

function parseArgs(argv) {
  const [command, capabilityId, ...rest] = argv;
  const opts = {
    command,
    capabilityId,
    runtime: "",
    dryRun: false,
    apply: false,
    target: process.cwd(),
  };

  for (let i = 0; i < rest.length; i += 1) {
    const token = rest[i];
    if (token === "--runtime") {
      opts.runtime = rest[i + 1] || "";
      i += 1;
    } else if (token === "--dry-run") {
      opts.dryRun = true;
    } else if (token === "--apply") {
      opts.apply = true;
    } else if (token === "--target") {
      opts.target = path.resolve(rest[i + 1] || "");
      i += 1;
    } else {
      fail(`unknown argument: ${token}`);
    }
  }

  return opts;
}

function ensureValid(opts) {
  if (opts.command !== "install") {
    fail("only the 'install' command is supported in v0.1.0");
  }
  if (!opts.capabilityId) {
    fail("missing capability id");
  }
  if (!opts.runtime) {
    fail("missing required --runtime <codex|openclaw>");
  }
  if (!opts.dryRun && !opts.apply) {
    fail("choose one of --dry-run or --apply");
  }
  if (opts.dryRun && opts.apply) {
    fail("use either --dry-run or --apply, not both");
  }
}

function loadAdapter(capabilityId, runtime) {
  const adapterPath = path.join(
    repoRoot,
    "capabilities",
    capabilityId,
    "adapters",
    runtime,
    "adapter.yaml",
  );
  if (!fs.existsSync(adapterPath)) {
    fail(`no adapter found for capability '${capabilityId}' and runtime '${runtime}'`);
  }

  const yaml = fs.readFileSync(adapterPath, "utf8");
  const copies = [];
  let inCopies = false;
  for (const rawLine of yaml.split("\n")) {
    const line = rawLine.trimEnd();
    if (line.trim() === "copies:") {
      inCopies = true;
      continue;
    }
    if (inCopies && /^\s*-\s+from:\s+/.test(rawLine)) {
      copies.push({ from: rawLine.replace(/^\s*-\s+from:\s+/, "").trim(), to: "" });
      continue;
    }
    if (inCopies && /^\s+to:\s+/.test(rawLine) && copies.length > 0) {
      copies[copies.length - 1].to = rawLine.replace(/^\s+to:\s+/, "").trim();
      continue;
    }
    if (inCopies && rawLine.trim() === "post_install:") {
      break;
    }
  }

  return copies;
}

function describePlan(capabilityId, runtime, target, copies) {
  console.log(`Capability: ${capabilityId}`);
  console.log(`Runtime: ${runtime}`);
  console.log(`Target: ${target}`);
  console.log("Mode: materialize");
  console.log("");
  console.log("Files to materialize:");
  for (const copy of copies) {
    console.log(`- ${copy.from} -> ${copy.to}`);
  }
  console.log("");
  console.log("Validation checks:");
  console.log("- structural existence checks");
  console.log("- runtime-target shape checks");
  console.log("- public-safety review remains a content gate");
}

function applyPlan(capabilityId, target, copies) {
  const capabilityRoot = path.join(repoRoot, "capabilities", capabilityId);
  for (const copy of copies) {
    const sourcePath = path.join(capabilityRoot, copy.from);
    const targetPath = path.join(target, copy.to);
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.copyFileSync(sourcePath, targetPath);
  }
}

const opts = parseArgs(process.argv.slice(2));
ensureValid(opts);

const copies = loadAdapter(opts.capabilityId, opts.runtime);
describePlan(opts.capabilityId, opts.runtime, opts.target, copies);

if (opts.apply) {
  applyPlan(opts.capabilityId, opts.target, copies);
  console.log("");
  console.log("Apply result: success");
}
