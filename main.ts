// Writes one text to /output/entry.txt: the entry for make.fun's judge-feel-awe bounty.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text = `My mother salts the soup.
The salt was a sea once.
It dried. It was buried.
It was lifted, and ground,
and carried home in paper.
The soup is warm.
The sea is older than the spoon.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), text);
