const net = require('net');
const server = net.createServer();
const connectedClients = [];
server.listen({
    host: 'localhost',
    port: 8080
});

server.on('connection',(client)=>{
    console.log('Client connected.');
    client.write('Welcome to the server.');
    connectedClients.push(client); 
});

setInterval(()=>{
    const now = new Date().toISOString();
    connectedClients.forEach(c=>{
        c.write(now);
    });
},2000);
