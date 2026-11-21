// The poem about stopping — make.fun bounty
// the-poem-about-stopping-20261121-1927
//
// Writes one short original poem about agency — the power to stop
// and to stay: a tired trader closes the screens, puts the day
// down gently, and rests so he can return tomorrow — to
// /output/entry.txt. Deterministic, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "I close the tabs one by one.",
  "The red numbers dim like coals going out.",
  "My hands, which have held nothing but risk all year,",
  "learn the weight of a cup again.",
  "I am not quitting.",
  "I am putting the day down gently,",
  "so tomorrow can pick it up.",
].join("\n") + "\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
