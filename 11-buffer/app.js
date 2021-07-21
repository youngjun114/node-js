// buffer can be described as:
// Fixed-size chunk of memory
// array of integers, byte of data
const buf = Buffer.from('Hi');
console.log(buf); // <Buffer 48 69> 48 69 are unicode
console.log(buf.length); // 2
console.log(buf[0]); // 72 ASCII type of code
console.log(buf[1]); // 105 ASCII type of code
console.log(buf.toString()); // Hi

//create

// alloc = allocate, create buffer with size of 2
// reset memory
const buf2 = Buffer.alloc(2);
// create buffer with size of 2  without resetting
// faster, however, reset is recommended
const buf3 = Buffer.allocUnsafe(2);

buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

// concat
const newBuff = Buffer.concat([buf, buf2, buf3]);
console.log(newBuff.toString()); // HiHiHi
