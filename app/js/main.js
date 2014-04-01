
/*global angular, io, jQuery*/

'use strict';

var rob = rob || {};

(function ($) {
  rob.socket = io.connect('http://' + location.hostname + ':8080');

  rob.socket.emit('hello', 'world');
  
  rob.socket.on('oscMessage', function (data) {
    console.log('oscdata: ' + data);
  });
  
}());