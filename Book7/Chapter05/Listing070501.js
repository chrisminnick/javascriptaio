import http from 'http';

const app = http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World</h1>');
  })
  .listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
  });
