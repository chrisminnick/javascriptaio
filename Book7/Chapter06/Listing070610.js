const http = require('http');
const server = http.createServer();

server.once('request', (req, res) => {
  console.log('First request received at ' + new Date());
});

server.listen(3000);
console.log('Server running at http://localhost:3000/');
