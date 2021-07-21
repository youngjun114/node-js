const path = require('path');

// POSIX  (Unix: Mac, Linux): 'User/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname);
console.log(__filename);

console.log(path.sep); // '/'
console.log(path.delimiter); // ':'

// basename
console.log(path.basename(__filename)); // app.js
console.log(path.basename(__filename, '.js')); // app

// dirname
console.log(path.dirname(__filename)); // /Users/youngjunwoo/Desktop/projects/node/9-path

// extension
console.log(path.extname(__filename)); // .js

// parse to object
const parsed = path.parse(__filename); // return object
console.log(parsed);

// parse to string
const str = path.format(parsed);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname)); // true
console.log('isAbsolute?', path.isAbsolute('../')); // false

// normalize
console.log(path.normalize('./folder/////sub')); // folder/sub

// join
// use either path.sep or join to be suitable for all os
console.log(__dirname + '/' + 'image'); // ~/9-path/image
console.log(__dirname + path.sep + 'image'); // ~/9-path/image
console.log(path.join(__dirname, 'image')); // ~/9-path/image
