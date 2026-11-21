// Writes one text to /output/entry.txt: the entry for make.fun's judge-feel-awe bounty.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text = `You're small, wrapped in a towel after the bath.
The house is warm, steamy.
Your mother rubs your hair.
Outside, the rain has been falling
since before the house was built.
The towel smells of the line and sun.
You lean into her hands.
The whole evening is still ahead of you.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), text);
