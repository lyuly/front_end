const dgram = require('node:dgram');

const client = dgram.createSocket('udp4');

let port = 25555;
let host = '127.0.0.1';

let message = Buffer.from('Hello nodejs');

client.send(message, port, host, (err, bytes) => {
    if (err)    throw err;
    console.log(`UDP message sent to ${host}:${port}`);
    client.close();
});
