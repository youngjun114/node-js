//  'this' in function that is being used from outside of class is global
function hello() {
  console.log(this);
  console.log(this === global); // true
}

hello();

// 'this' in Class points to itself
class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log('---- Class ----');
    console.log(this);
    console.log(this === global); //false
  }
}

const a = new A(1);
a.memberFunction();

// 'this' in Node.js is exports module
console.log('--- global scope ---');
console.log(this); // {}
console.log(this === module.exports); // true
