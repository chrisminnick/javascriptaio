import { Stream } from 'stream';
const readableStream = new Stream.Readable();
readableStream.push('Hello, World!');
readableStream.push(null);
readableStream.pipe(process.stdout);
