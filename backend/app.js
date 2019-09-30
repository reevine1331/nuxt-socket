// Express
const express = require('express')
const app = express()
 
const server = app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
})
 
// ↓ここからSocketIOの処理
const io = require('socket.io')(server)
 
io.on('connection', function(socket) {
  console.log(`a user connected[id:${ socket.id }]`)
  socket.on('POST_MESSAGE', function(data) {
    console.log(`posted[name:${ data.name },text:${ data.text }], time:${data.time}`)
    io.emit('MESSAGE', data)
  })
})