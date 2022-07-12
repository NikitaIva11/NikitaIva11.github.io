let http = require('http');
let static = require('node-static');
const { findEndPoint } = require('./endpoints/endpoints');
let file = new static.Server('.');
let port = 7070;

http.createServer(function(req,res){
     res.setHeader('Access-Control-Allow-Origin','*');
     if(req.url)return findEndPoint(req,res);
     file.serve(req,res);
}).listen(port)

// function returnInfo(req,res){
     
//      res.write('lol')
//      res.end();
//      return;
// }