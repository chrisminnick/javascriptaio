const os = require('os');

console.log('Host: ' + os.hostname());
console.log('OS: ' + os.type());
console.log('OS Version: ' + os.release());
console.log('Total Memory: ' + os.totalmem() + ' bytes');
console.log('Free Memory: ' + os.freemem() + ' bytes');
