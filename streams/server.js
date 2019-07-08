const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    // fs.readFile(__dirname+'/index.html', (err,data)=>{
    //     if (err) return console.log(err);
    //     res.end(data);    
    // });
    data = fs.createReadStream(__dirname+'/index.html');
    data.pipe(res);
});

server.listen(8080,'localhost');