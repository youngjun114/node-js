/**
 * os module provides operating system info
 */

const os = require('os');

// end of line
console.log(os.EOL);
console.log(os.EOL === '\n'); // mac os: true
console.log(os.EOL === '\r\n'); // mac os: false windows: true

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());
