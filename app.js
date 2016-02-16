/**
 * Created by valkudry on 2/16/16.
 */

// the main file of code to start

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Context-Type': 'text/plain'});
    res.end('Hello WebStorm from KVV');

}).listen(1337, '127.0.0.1');
console.log('Server is running at http:/127.0.0.1:1337/');