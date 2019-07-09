const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');

const urlEncodedParser = bodyparser.urlencoded({extended:false});
app.use(express.static('assets'));
app.use(cookieparser());

app.get('/',(req,res)=>{
    res.send('Got a GET request');
    console.log(req.cookies);
});
app.post('/',(req,res)=>{
    res.send('Got a POST request');
});
app.get('/list',(req,res)=>{
    res.send('Page listens');
});
app.delete('/del_user',(req,res)=>{
    res.send('Got a DELETE request');
});
app.get('/a*b',(req,res)=>{
    res.send('Pattern matched');
});
app.get('/index.html',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
app.get('/process_get',(req,res)=>{
    const response = {
        fName: req.query.firstName,
        lName: req.query.lastName
    };
    console.log(response);
    res.send(JSON.stringify(response));
});
app.post('/process_post', urlEncodedParser, (req,res)=>{
    const response = {
        fName: req.body.firstName,
        lName: req.body.lastName
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
app.post('/file_upload', function (req, res) {
    console.log(req.files.file.name);
    console.log(req.files.file.path);
    console.log(req.files.file.type);
    const file = __dirname + "/" + req.files.file.name;
    fs.readFile( req.files.file.path, function (err, data) {
       fs.writeFile(file, data, function (err) {
          if( err ) {
             console.log( err );
             } else {
                response = {
                   message:'File uploaded successfully',
                   filename: req.files.file.name
                };
             }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
    });
 });
const server = app.listen(8081,()=>{
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server is listening at http://${host}:${port}`);
});