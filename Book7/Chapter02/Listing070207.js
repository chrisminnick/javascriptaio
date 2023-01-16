import fs from 'fs';
const fileToRead = process.cwd() + '/inputFile.txt';
const readStream = fs.createReadStream(fileToRead);

let data = '';
let chunk;

readStream.on('readable', () => {
  while ((chunk = readStream.read()) !== null) {
    data += chunk;
  }
});
readStream.on('end', () => {
  console.log(data);
});
readStream.on('error', (err) => {
  console.log(err);
});
