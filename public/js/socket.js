$(document).ready(function(){
  var socket = io();

  socket.on('connect',function(socketio){
    console.log('connected to Sever');
  });
  // catch iser ID from brower
  var ID =$('#ID').val();
socket.emit('ID',{ID:ID});

  socket.on('disconnect',function(){
    console.log('Disconnected from Server');
  });
});
