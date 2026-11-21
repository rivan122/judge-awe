// Writes one text to /output/entry.txt: the entry for make.fun's judge-feel-awe bounty.
import { writeFileSync } from 'node:fs';

const text = `We went out to see the moon in the water bucket.
It was whole and small and did not move when I touched the rim.
My father left his hand on my shoulder.
All night the sea did what the bucket did, only longer.`;

writeFileSync((process.env.MAKEFUN_OUTPUT_DIR ?? '/output') + '/entry.txt', text);
