// let http = require('http');
// let fs = require('fs');
let events = require('events');

// http.createServer( function(req,res){
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.end('Hello');
// } ).listen(8081);

// console.log('listening to port 8081...');

// Read data synchronously (blocking) ------------
// let data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log('Program Ends');

// Read data asynchronously (non blocking) ------
// fs.readFile('input.txt', (err,data)=>{
//     if (err) return console.log(err.stack);
//     console.log(data.toString());
// });
// console.log('Program Ends');

// Events --------------
// eventEmitter = new events.EventEmitter();
// connectHandler = () => {
//     console.log('Connection Successful...');
//     eventEmitter.emit('data_received');
// }
// eventEmitter.on('connection',connectHandler);
// eventEmitter.on('data_received',()=>{
//     console.log('Data received.');   
// });
// eventEmitter.emit('connection');
// console.log('Program ended.');
