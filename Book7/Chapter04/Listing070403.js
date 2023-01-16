import { promises as fs } from 'fs';

async function main() {
  const data = await fs.readFile('data.txt', 'utf8');
  console.log(data);
}

main();
