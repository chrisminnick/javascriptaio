import server from 'http';
import fs from 'fs';

const app = server.createServer();

app.on('request', (req, res) => {
  const book = fs.createReadStream('./war-and-peace.txt');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  book.on('data', (chunk) => {
    console.log('chunk received');
    console.log(chunk);
    res.write(chunk.toString());
  });
  book.on('end', () => res.end());
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');
