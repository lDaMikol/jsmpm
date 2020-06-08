const os = require('os');

console.log('OS: ', os.platform());
console.log('CPU Architecture: ', os.arch());
console.log('CPU Info: ', os.cpus());
console.log('Free memory: ', os.freemem());
console.log('Total memory: ', os.totalmem());
console.log('Home directory: ', os.homedir());