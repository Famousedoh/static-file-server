const os = require('os');

console.log(os.hostname());
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);
console.log(os.networkInterfaces());
console.log(os.uptime());