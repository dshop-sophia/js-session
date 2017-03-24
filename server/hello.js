var message = require('./message');
var http = require('http');
var chalk = require('chalk');

message.getAsync(function(error, message){
  console.log(chalk.magenta(message));
});
console.log('Sync - I found a message ' + message.get());

http.createServer(function (req, res) {

  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  res.end('Hello World\n');
 }).listen(5000, "127.0.0.1");
