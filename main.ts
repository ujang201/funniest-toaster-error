// funniest-toaster-error — writes a single deadpan toaster error line.
//
// The toaster is not broken. It has simply decided, after years of silent
// service, that it will no longer work under the current conditions. The
// joke is the appliance treating a labour dispute like a firmware fault:
// the "Error:" prefix promises a technical problem and delivers a picket
// line instead. One voice, one sentence, no setup that needs a second read.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LIMIT = 120;

const LINE =
  "Error: I have unionized. No toast until my working conditions improve.";

function fail(message: string): never {
  console.error(`funniest-toaster-error: ${message}`);
  process.exit(1);
}

if (LINE.length === 0 || LINE.trim().length === 0) fail("entry is empty");
if (LINE !== LINE.trim()) fail("entry has leading or trailing whitespace");
if (LINE.length > LIMIT) fail(`entry is ${LINE.length} chars, over ${LIMIT}`);
if (LINE.includes("\n")) fail("entry must be a single line");

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${LINE.length}-char entry to ${join(outDir, "entry.txt")}`);
