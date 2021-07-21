/**
 * process module provides process info
 */

const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid); // process id
console.log(process.ppid); // parent of process id
console.log(process.platform);
console.log(process.env);
console.log(process.uptime()); // how long it is been running
console.log(process.cwd());
console.log(process.cpuUsage);

// this will be called after finishing callstacks
// this will be sent to task queue
setTimeout(() => {
  console.log('setTimeout');
}, 0);

// similar to setTimeout()
// even though setTimeout() came into task queue first, 
// nextTick()'s callback will be shifted to first in line.
process.nextTick(() => {
  console.log('nextTick');
});

for (let index = 0; index < 100; index++) {
  console.log('for loop');
}
