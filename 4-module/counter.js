let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

// module can be abbreviated, but module.exports and exports are different
module.exports.getCount = getCount;
console.log(module.exports === exports); //true
exports = {};
console.log(module.exports === exports); //false
exports.increase = increase; // error occurs here
console.log(module);
