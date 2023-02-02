const express = require('express');
const http = require('http');
const app = express();
const socketIO = require('socket.io');
const cors = require('cors');
const PORT = 3010

let texts = []

app.use(cors())

const server = http.Server(app);
server.listen(PORT, () => {
    console.log(`Server and Websocket running at localhost:${PORT}`);
})

const io = socketIO(server, { cors: { origin: "*" } });

io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('get_text', () => {
        socket.emit("update_chat", texts)
            //io.emit('update_chat', texts)
    })

    socket.on("send_text", text => {
        texts.push(text)
        io.emit('update_chat', texts)
    })
});