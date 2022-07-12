let http = require('http');
let static = require('node-static');
let file = new static.Server('../client_side');
let port = 7274;

http.createServer(function(req,res){
     file.serve(req,res)
}).listen(port)

