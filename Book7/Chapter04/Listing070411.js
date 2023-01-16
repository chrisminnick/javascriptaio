import { promises as fs } from 'fs';
import path from 'path';

const __dirname = path.resolve();

async function main() {
  const files = await fs.readdir(__dirname, { withFileTypes: true });
  for (const file of files) {
    const stats = await fs.stat(file.name);
    console.log(
      `${file.name} is ${stats.size} bytes and is ${
        file.isDirectory() ? 'a' : 'not a'
      } directory. It was created on ${stats.birthtime} and last modified on ${
        stats.mtime
      }`
    );
  }
}

main();
