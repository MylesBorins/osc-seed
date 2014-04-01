/**
 * Module dependencies.
 */

'use strict';

var io = require('socket.io').listen(8080),
    osc = require('node-osc'),
    _ = require('lodash');

var oscServer = new osc.Server(9001, '0.0.0.0');

io.sockets.on('connection', function (socket) {
  oscServer.on('message', function (msg, rinfo) {
  	console.log('oscMsg ' + msg[0]+" oscData "+ msg[1]);
    socket.emit('oscMessage', msg);
  });
  
  socket.on('hello', function (data) {
    console.log('hello ' + data);
  });

});