import http from 'http';
const server = http.createServer();

server.once('request', (req, res) => {
  console.log('First request received at ' + new Date());
  res.end('First request received');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
