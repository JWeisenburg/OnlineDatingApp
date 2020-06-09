$(document).ready(function(){
  var socket = io();

  socket.on('connect',function(socketio){
    console.log('connected to Sever');
  });
  socket.on('disconnect',function(){
    console.log('Disconnected from Server');
  });
});
