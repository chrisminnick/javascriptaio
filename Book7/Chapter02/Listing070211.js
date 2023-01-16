import fs from 'fs';
import stream from 'stream';
const readableStream = fs.createReadStream('mobydick.txt');
const writableStream = fs.createWriteStream('mobydick-copy.txt');
const passThroughStream = new stream.PassThrough();
readableStream.setEncoding('utf8');

passThroughStream.on('data', (chunk) => {
  console.log(chunk.length);
});
readableStream.pipe(passThroughStream).pipe(writableStream);
