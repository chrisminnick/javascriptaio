import { promises as fs } from 'fs';
import path from 'path';

const __dirname = path.resolve();

async function main() {
  const files = await fs.readdir(__dirname, { withFileTypes: true });
  for (const file of files) {
    console.log(file.name, file.isDirectory());
  }
}

main();
