import server from 'http';
import { promises as fs } from 'fs';

const app = server.createServer();

app.on('request', async (req, res) => {
  const book = await fs.readFile('./war-and-peace.txt');
  res.end(book);
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');
