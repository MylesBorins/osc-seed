var connect = require('connect'),
    http = require('http'),
    forever = require('forever'),
    directory = './app/',
    open = require('open');

connect()
  .use(connect.static(directory))
  .listen(1337);
  
console.log('Server Running on port 1337');

open('http://localhost:1337');

var child = new (forever.Monitor)('osc.js', {
  options: []
});

child.start();
