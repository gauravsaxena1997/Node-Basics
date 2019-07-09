const http = require('http');
const options = {
    host: 'localhost',
    port: '8081',
    path: '/index.html'
}

const callback = (res) =>{
    let body = '';
    res.on('data',(data)=>{
        body += data;
        console.log('data: '+data);
    });
    res.on('end',()=>{
        console.log(body);
    });
    res.on('error',(err)=>{
        console.log(err);
    });
};

const req = http.request(options,callback);
req.end();
