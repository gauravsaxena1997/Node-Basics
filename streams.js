let fs = require('fs');
let zlib = require('zlib');
let data = '';
readStream = fs.createReadStream('input.txt');
let writeStream = fs.createWriteStream('output.txt');
readStream.on('data',(chunk)=>{
    data += chunk;
    // writeStream.write(data);
});
readStream.on('end',()=>{
    console.log(data);
});
readStream.on('error',(err)=>{
    console.log(err.stack);
});
writeStream.end();
writeStream.on('finish',()=>{
    console.log('Write Completed.');
})
writeStream.on('error',(err)=>{
    console.log(err.stack);
});

// Piping
let writeStream1 = fs.createWriteStream('output.txt');
readStream.pipe(writeStream1);

// Chaining streams (compress file)
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

// fs.createReadStream('input.txt.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('input.txt'));