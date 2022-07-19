let http = require('http');
let static = require('node-static');
const { endPoints } = require('./endpoints/endpoints');
let file = new static.Server('.');
let port = 7070;

http.createServer(function(req,res){
     res.setHeader('Access-Control-Allow-Origin','*')
     if(req.url)return endPoints(req,res);
     
     file.serve(req,res);
     
}).listen(port)