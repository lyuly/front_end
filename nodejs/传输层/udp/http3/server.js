const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

const PORT = 3000;
socket.bind(PORT);

const HOST = '127.0.0.1';
const message = 'Hello, UDP server!';

socket.send(message, 0, message.length, PORT, HOST, (err) => {
  if (err)  throw err;
  console.log(`UDP message sent to ${HOST}:${PORT}`);
});

socket.on('message', (msg, rinfo) => {
  console.log(`UDP message received from ${rinfo.address}:${rinfo.port}`);
  console.log(`message content: + ${msg.toString()}`);
})