const RC5 = require('rc5');

const key = 'nando';

const rc5 = new RC5(key);

const cipher = rc5.encrypt('sita');

const plain = rc5.decrypt(cipher);

console.log(plain);
