import { promises as fs } from 'fs';
import path from 'path';

const __dirname = path.resolve();

async function main() {
  const files = await fs.readdir(__dirname);
  for (const file of files) {
    console.log(file);
  }
}

main();
