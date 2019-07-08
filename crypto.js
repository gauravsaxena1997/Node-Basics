const crypto = require('crypto');
const key = 'secret-key';
const hash = crypto.createHash('md5')
    .update('password')
    .digest('hex');

console.log(hash);

const sha = crypto.createHmac('sha256',key)
    .update('password')
    .digest('hex');

console.log(sha);
