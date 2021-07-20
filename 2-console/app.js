console.log('logging...');
console.clear();

// log level
console.log('log'); // dev
console.info('info'); // informative
console.warn('warn'); // not critical
console.error('error'); // critical, client error, system error

// assert
// only shows the log when first parameter is not true
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

// print object
const student = { name: 'youngjun', age: 20, company: { name: 'Google' } };
console.log(student);
console.table(student);
// options can be passed as second parameter: showHidden, depth, colors
console.dir(student, { showHidden: true, colors: false, depth: 0 });
console.dir(student, { showHidden: false, colors: false, depth: 0 });
console.dir(student, { showHidden: true, colors: true, depth: 0 });
console.dir(student, { showHidden: true, colors: true, depth: 1 });

// measuring time
// useful when measuring performance
console.time('for loop'); // label has to match
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd('for loop'); // label has to match

// counting
function a() {
  console.count('a function');
}
a();
console.countReset('a function'); // can be reset after specific action
a();

// trace
// useful when debugging
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log('f3');
  console.trace(); // it shows where and how the function is called
}
f1();
