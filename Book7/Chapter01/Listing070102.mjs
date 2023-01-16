import * as fs from 'node:fs';
import * as http from 'node:http';

http
  .createServer((req, res) => {
    fs.readFile('importantInfo.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
