/*
console.log('hey hey !');

var res;

db.query(“select x from table_Y”,function (err, result){
    res = result;
	doSomethingWith(res, function(err, result){
      show(result, function(err, heiehi){
        display(function(err, heiehi){
        })
      });
  }); //wait for result!

});
doSomethingWithOutResult(); //executes without any delay!


function doSomethingWith(result, callback){
  result = result +1;
  callback(null, result);
}
*/
var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World\n'); }).listen(5000, "127.0.0.1");
