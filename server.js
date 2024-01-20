
const { fileURLToPath, URL } = require('url')
const { join, dirname } = require('path')
const { Server } = require("socket.io")
const express = require('express')
const http = require('http')
const fetch = require('node-fetch')
const app = express()
const server = http.createServer(app);
//const __dirname = dirname(fileURLToPath(require.meta.url))
const io = new Server(server);


function connect(conn, PORT) {
  app.get('/', (req, res) => {res.sendFile(__dirname + '/index.html')});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
  //console.log('Keep Alive on ')
  //keepAlive()
});
}


//KEEP ALIVE
function keepAlive() {
    const url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
    if (/(\/\/|\.)undefined\./.test(url)) return
    setInterval(() => {
        fetch(url).catch(console.error)
    }, 5 * 1000 * 60)
}

module.exports = { connect, keepAlive }
