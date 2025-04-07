const aedes = require('aedes')();
const http = require('http');
const ws = require('ws');

// HTTP server on port 8080 (WebSocket MQTT)
const server = http.createServer();
const wss = new ws.Server({ server });

const PORT = process.env.PORT || 8080;

wss.on('connection', (stream) => {
  const connection = aedes.handle(stream);
});

aedes.on('client', (client) => {
  console.log(`Client Connected: ${client.id}`);
});

aedes.on('publish', (packet, client) => {
  if (client) {
    console.log(`Message from ${client.id} on topic "${packet.topic}": ${packet.payload.toString()}`);
  }
});

server.listen(PORT, () => {
  console.log(`MQTT broker running on ws://localhost:${PORT}`);
});
