import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io';

const PORT = 3000;
const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req,res) => {
  res.send('<h1>Hello</h1>')
})
io.on('connection', (socket) => {
  console.log('user connected')
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
  
  socket.on('msg', (msg) => {
    io.emit('msg', { message: msg, id: socket.id });
  })
})

server.listen(PORT, () => {
  console.log('Server is listening on 3000')
})
