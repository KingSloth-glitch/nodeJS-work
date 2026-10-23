const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('wälkommen till min server');
});

server.listen(3000, () => {
  console.log('Servern körs på http://localhost:3000');
});
