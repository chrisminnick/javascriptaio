import { Stream } from 'stream';
const readableStream = new Stream.Readable({
  read(size) {
    const numberToCount = process.argv[2] || 10;
    for (let i = 0; i < numberToCount; i++) {
      readableStream.push(i.toString());
    }
    readableStream.push(null);
  },
});

readableStream.on('data', (chunk) => {
  console.log(chunk.toString());
});

readableStream.on('end', () => {
  console.log('Done');
});
