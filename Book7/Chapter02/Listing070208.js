import fs from 'fs';
const readableStream = fs.createReadStream('mobydick.txt');
const writableStream = fs.createWriteStream('mobydick-copy.txt');

readableStream.setEncoding('utf8');

readableStream.on('data', (chunk) => {
  writableStream.write(chunk);
});
