import { Transform } from 'stream';

export const makeBig = new Transform({
  transform(chunk, encoding, callback) {
    chunk = chunk.toString().toUpperCase();
    this.push(chunk);
    callback();
  },
});
