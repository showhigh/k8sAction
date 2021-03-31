const http = require('http');
const https = require('https');
const os = require('os');
var fs = require('fs');

var options = {
 key: fs.readFileSync('./server.key'),
 cert: fs.readFileSync('./server.crt')
};

console.log("Kubia server starting...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("You've hit " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);

var sweb = https.createServer(options, handler);
sweb.listen(443);


