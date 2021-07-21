/**
 * timer in Node.js
 */

let num = 1;

// in every 1 second, callback function will be called
const interval = setInterval(() => {
  console.log(num++);
}, 1000);

// clearInterval() stops interval
setTimeout(() => {
  console.log('timeout!');
  clearInterval(interval);
}, 6000);
