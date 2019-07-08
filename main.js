// let http = require('http');
let fs = require('fs');

// http.createServer( function(req,res){
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.end('Hello');
// } ).listen(8081);

// console.log('listening to port 8081...');

// Read data synchronously (blocking)
// let data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log('Program Ends');

// Read data asynchronously (non blocking)
fs.readFile('input.txt', (err,data)=>{
    if (err) return console.log(err);
    console.log(data.toString());
});
console.log('Program Ends');

