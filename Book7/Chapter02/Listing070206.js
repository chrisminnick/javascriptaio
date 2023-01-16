import fs from 'fs';
const fileToRead = process.cwd() + '/inputFile.txt';
const readStream = fs.createReadStream(fileToRead);

readStream.on('data', (chunk) => {
  console.log(chunk.toString());
});

readStream.on('end', () => {
  console.log('End of file reached');
});

readStream.on('error', (err) => {
  console.log(err);
});
