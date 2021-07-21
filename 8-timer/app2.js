console.log('code 1'); // (1) sent to callstack first
// (5) send to task queue first
setTimeout(() => {
  console.log('setTimeout 0');
}, 0);

console.log('code 2'); // (2) sent to callstack second
// (6) sent to task queue second
setImmediate(() => {
  console.log('setImmediate');
});

console.log('code 3'); // sent to callstack third (3)
// (4) sent to task queue last, but ignores order and goes to front in line (4)
process.nextTick(() => {
  console.log('process.nextTick');
});

/**
 * Output:
 * code 1
 * code 2
 * code 3
 * process.nextTick
 * setTimeout 0
 * setImmediate
 */
