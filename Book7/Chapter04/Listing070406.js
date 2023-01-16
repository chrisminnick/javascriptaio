import { promises as fs } from 'fs';

async function main() {
  const data = await fs.readFile('data.txt');
  await fs.writeFile('data2.txt', data);
}

main();
