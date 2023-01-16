import path from 'path';
import { promises as fs } from 'fs';

const __dirname = path.resolve();

async function main(filename) {
  const fileToRead = path.join(__dirname, filename);
  const data = await fs.readFile(fileToRead);
  console.log(`Read ${data.length} bytes from ${fileToRead}`);
  console.log(data.toString('utf-8'));
}

main('lorum-ipsum.txt');
