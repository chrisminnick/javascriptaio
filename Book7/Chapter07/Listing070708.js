import http from 'http';
import url from 'url';
import fs from 'fs';
import path from 'path';

const server = http.createServer((request, response) => {
  const urlObj = url.parse(request.url);
  const pathName = urlObj.pathname;
  const method = request.method;

  if (pathName === '/form') {
    if (method === 'GET') {
      fs.readFile(path.join(process.cwd(), 'form.html'), (error, data) => {
        if (error) {
          response.statusCode = 500;
          response.statusMessage = 'Internal Server Error';
          response.end();
        } else {
          response.statusCode = 200;
          response.statusMessage = 'OK';
          response.setHeader('Content-Type', 'text/html');
          debugger;
          response.end(data);
        }
      });
    } else if (method === 'POST') {
      let data = '';
      request.on('data', (chunk) => {
        data += chunk;
        debugger;
      });

      request.on('end', () => {
        const params = new URLSearchParams(data);
        const name = params.get('name');
        const email = params.get('email');
        const comments = params.get('comments');
        response.statusCode = 200;
        response.statusMessage = 'OK';
        response.setHeader('Content-Type', 'text/html');
        debugger;
        response.write(
          `<html><body><h1>Thank you, ${name}.</h1><p>Your post has been received.</p>
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Comments: ${comments}</p></body></html>`
        );
        debugger;
        response.end();
      });
    }
  } else {
    response.statusCode = 404;
    response.statusMessage = 'Not Found';
    response.end();
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
