/**
 * Using an old version of exporting and importing modules
 */
const counter = require('./counter.js');

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());
