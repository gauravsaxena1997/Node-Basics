const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req,res)=>{
    pathname=url.parse(req.url).pathname;
    console.log(`Request for ${pathname} received.`);
    fs.readFile(pathname.substr(1), (err,data)=>{
        if (err) {
            console.log(err.stack);
            res.writeHead(404,{'Content-Type':'plain/html'});
        } else {
            res.writeHead(200,{'Contect-Type':'plain/html'});
            res.write(data.toString());
        } 
        res.end();
    });
});
server.listen(8081,'localhost');