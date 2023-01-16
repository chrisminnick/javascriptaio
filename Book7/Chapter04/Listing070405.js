import { promises as fs } from 'fs';
import https from 'https';

const privateKey = fs.readFileSync('private.key');
const certificate = fs.readFileSync('certificate.crt');

const options = {
  key: privateKey,
  cert: certificate,
};

https
  .createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('hello world');
  })
  .listen(8000);
