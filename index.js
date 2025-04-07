const aedes = require('aedes')()
const http = require('http')
const websocket = require('websocket-stream')

const port = process.env.PORT || 443 // Render exposes HTTP/WebSocket on 443

const server = http.createServer()
websocket.createServer({ server }, aedes.handle)

server.listen(port, () => {
  console.log(`MQTT broker running on ws://localhost:${port}`)
})

aedes.on('client', client => {
  console.log(`Client connected: ${client.id}`)
})

aedes.on('publish', (packet, client) => {
  if (client) {
    console.log(`Message from ${client.id} on ${packet.topic}: ${packet.payload.toString()}`)
  }
})
