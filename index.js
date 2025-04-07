
const aedes = require("aedes")();
const net = require("net");

const PORT = 1883;

const server = net.createServer(aedes.handle);

server.listen(PORT, () => {
  console.log(`🚀 MQTT broker running on mqtt://localhost:${PORT}`);
});

aedes.on("client", (client) => {
  console.log(`Client connected: ${client.id}`);
});

aedes.on("publish", (packet, client) => {
  if (client) {
    console.log(`📨 Message from ${client.id}: ${packet.payload.toString()}`);
  }
});
