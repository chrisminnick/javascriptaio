import fs from 'fs';
import path from 'path';
import readline from 'readline';

const __dirname = path.resolve();

const rl = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, 'recipes.txt')),
  crlfDelay: Infinity,
});

let lineNumber = 0;
rl.on('line', (line) => {
  lineNumber++;
  if (line.includes('taco')) {
    rl.emit('taco', lineNumber, line);
  }
});

rl.on('taco', (lineNumber, line) => {
  console.log(`Taco found on line ${lineNumber}: ${line}`);
  fs.appendFileSync(
    path.join(__dirname, 'taco-log.txt'),
    `Taco found on line ${lineNumber}: ${line}
`
  );
});
