b = new Buffer.alloc(256);
len = b.write('Writing inside a buffer.');
console.log('Octets written: '+len);
console.log(b.toString());

alpha = new Buffer.alloc(26);
for(let  i =0;i<26;i++){
    alpha[i] = i+97;
}
// Read a buffer
console.log(alpha);
console.log(alpha.toString('ascii'));
console.log(alpha.toString('ascii',0,5));
console.log(alpha.toString('ascii',20));
console.log(alpha.toJSON());

// Concat buffers
con = Buffer.concat([b,alpha]);
console.log(con.toString());

// Compare Buffers
var buffer1 = new Buffer.from('ABC');
var buffer2 = new Buffer.from('ABCD');
result = buffer1.compare(buffer2);
if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
} else if(result === 0) {
   console.log(buffer1 +" is same as " + buffer2);
} else {
   console.log(buffer1 +" comes after " + buffer2);
}