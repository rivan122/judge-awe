// Writes one text to /output/entry.txt: the entry for make.fun's judge-feel-awe bounty.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text = `My grandmother sets a lump of coal on the fire.
It was a forest first, then a dark,
then a hundred million years of quiet weight.
It takes the flame slowly.
The room leans in.
Outside, the rain that fell on that forest
is still falling.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), text);
