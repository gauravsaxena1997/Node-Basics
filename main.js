let http = require('http');
// http.createServer=((req,res)=>  {
//     res.writeHead(200,{'Content-type': 'plain/text'});
//     res.end('Hello');
// }).listen(8081)

http.createServer( function(req,res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Hello');
} ).listen(8081);

console.log('listening to port 8081...');

