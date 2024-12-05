const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <h1>Hello World!</h1>
    <p>URL: ${req.url}</p>
    <p>Method: ${req.method}</p>
    <p>Headers:</p>
    <ul>
      ${Object.entries(req.headers).map(([key, value]) => `<li>${key}: ${value}</li>`).join('')}
    </ul>
  `);
});

var port = normalizePort(process.env.PORT || '8080');

server.listen(port);

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}