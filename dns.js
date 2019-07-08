const dns = require('dns');
dns.lookup('gauravsaxena.me',(err,val)=>{
    if(err) return console.log(err);
    console.log(val);
});
dns.resolve('gauravsaxena.me','MX',(err,val)=>{
    if(err) return console.log(err);
    console.log(val);
});
dns.reverse('8.8.8.8',(err,val)=>{
    if(err) return console.log(err);
    console.log(val);
});