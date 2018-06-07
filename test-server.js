const PORT = 5000;
var io = require('socket.io')(PORT);

io.on('connection', socket => {
  setInterval(() => {
    socket.emit('throwingAttempt', { thrown: 'PAPER', correct: 'PAPER' });
  }, 2000);
  // const onTest = data => {
  //   console.log('Received: "' + data + '" from socket: ' + socket.id);
  //   socket.emit('thrown', socket.id);
  // };
  //
  // const onDisconnect = () => {
  //   console.log('Received: disconnect event from socket: ' + socket.id);
  //   socket.removeListener('thrown', onTest);
  //   socket.removeListener('disconnect', onDisconnect);
  // };

  // socket.on('thrown', onTest);
  // socket.on('disconnect', onDisconnect);

  socket.send();
});
