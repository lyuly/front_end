const express = require('express');
const http = require('http');
const { listenerCount } = require('process');
const WebSocket = require('ws');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

wss.on('connection', function connection(ws) {
  console.log('连接成功');
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      client.send('do you love me?');
    });
  });
});

server.listen(3000, function listening() {
  console.log('服务器启动成功！');
})