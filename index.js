// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = process.env.PORT || 3000;

// app.use(bodyParser.json());

// app.post('/data', (req, res) => {
//   console.log('Received JSON:', req.body);
//   res.sendStatus(200);
// });

// app.listen(port, () => {
//   console.log(`HTTP server listening on port ${port}`);
// });



const http = require("http");
const websocket = require("websocket-stream");
const aedes = require("aedes")();

const server = http.createServer();

websocket.createServer({ server }, aedes.handle);

// Default Render port
const PORT = process.env.PORT || 10000;

server.listen(PORT, () => {
  console.log(`MQTT broker running on ws://localhost:${PORT}`);
});
s
