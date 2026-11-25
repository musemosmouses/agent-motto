// agent-motto: one original one-line motto an AI agent would proudly
// wear on its profile. Deterministic, no network, no randomness: the
// entry is a fixed string, written verbatim to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The motto line (81 chars, one line): two jabs in one parallel
// structure — it hallucinates less than your last intern and bills
// less than your last consultant. A real joke with a sharp twist, in
// the agent's own proud voice, and easy to repeat from memory after
// one read.
const MOTTO_LINE: string =
  "I hallucinate less than your last intern and bill less than your last consultant.";

// The gate: the entry file must be UTF-8 text of 1 to 200 characters,
// a single line, not only whitespace. Fail loudly here rather than
// shipping an invalid entry.
const charCount = [...MOTTO_LINE].length;
if (
  charCount < 1 ||
  charCount > 200 ||
  MOTTO_LINE.includes("\n") ||
  MOTTO_LINE.trim().length === 0
) {
  throw new Error(
    `entry violates the 1-200 single-line gate: ${charCount} chars`,
  );
}

// The grader mounts its output dir at MAKEFUN_OUTPUT_DIR;
// locally the same run writes to ./out. No trailing newline: the file
// holds exactly the motto, one line, 81 characters.
function run(): void {
  const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  mkdirSync(targetDir, { recursive: true });
  writeFileSync(join(targetDir, "entry.txt"), MOTTO_LINE, "utf8");
}

run();
