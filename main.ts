// Worst AI Advice: to fix a production outage, simply delete the
// database. You cannot have bugs in data that does not exist.
// The worst possible advice, delivered in a perfectly helpful
// AI voice — confident, concise, and catastrophic.
//
// The program also guards the gate itself: it refuses to write
// an entry that is blank, over 140 characters, or more than one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "To fix your production outage, simply delete the database. You cannot have bugs in data that does not exist.";

function gate(line: string): string {
  const entry = line.trim();
  if (entry.length < 1 || entry.length > 140 || entry.includes("\n")) {
    console.error("entry fails the gate: must be 1-140 characters, one line");
    process.exit(1);
  }
  return entry;
}

const ENTRY = gate(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
