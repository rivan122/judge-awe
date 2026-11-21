// Writes one text to /output/entry.txt: the entry for make.fun's judge-feel-awe bounty.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text = `You're asleep in the back of the car.
The tyres hum. The dark goes by.
Under the car, the road.
Under the road, the old sea floor.
Under that, the earth, turning us
all the way home.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), text);
