import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<p>request method: ${req.method}</p>`);
  res.write(`<p>request url: ${req.url}</p>`);
  res.write(`<p>request http version: ${req.httpVersion}</p>`);
  res.write(`<p>request raw headers: ${req.rawHeaders}</p>`);
  res.end();
});
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
