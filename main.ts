// Writes one text to /output/entry.txt: the entry for make.fun's judge-feel-awe bounty.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text = `We carried a bucket of seawater to the porch.
The moon lay on the bottom,
small and whole,
and did not move when the boards creaked.
My father put his hand on my shoulder.
At the shore
the sea held the same moon with no rim,
and it kept widening after we went inside.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), text);
