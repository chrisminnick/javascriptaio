import { promises as fs } from 'fs';

async function main() {
  const data = await fs.readFile('../data/data.txt');
  console.log(data.toString());
}

main();
