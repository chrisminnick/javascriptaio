import fs from 'fs';
import { makeBig } from './Listing070212.js';

const readableStream = fs.createReadStream('mobydick.txt');
const writableStream = fs.createWriteStream('mobydick-copy.txt');

readableStream.setEncoding('utf8');

readableStream.pipe(makeBig).pipe(writableStream);
