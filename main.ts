// Alien Field Notes: The Two Day Earth Review — one-line alien tourist review of Earth.
// The grader runs `node main.ts` and reads /output/entry.txt (or $ENTRY_OUTPUT).
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "Two days on Earth: the locals worship glowing rectangles, queue for bitter bean water, and call it 'living the dream.' Three stars — the sunsets are lovely, the queues are not.";

if (
  !/^[^\n]{1,200}$/.test(entry) ||
  entry.trim().length === 0 ||
  entry !== entry.trim() ||
  /[\u0000-\u001f\u007f]/.test(entry)
) {
  throw new Error(
    "entry must be 1-200 characters, a single non-blank line with no leading/trailing whitespace or control characters",
  );
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry, "utf8");
