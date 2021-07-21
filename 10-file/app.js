const fs = require('fs');

// 3 types of rename
// rename(..., callback(error, data))
// try {renameSync(...)} catch(e) {}
// promises.rename().then().catch(0)

// if file does not exist, node  stops running with an error
// fs.renameSync('./text.txt', './file.txt');

// with try & catch block, even if file  does not exist, node won't stop
// not recommended to use renameSync() because it is synchronous
try {
  fs.renameSync('./file.txt', './text.txt');
} catch (error) {
  console.error(error);
}

// rename() is async, thus 'hello world' will be called first.
fs.rename('./text.txt', './file.txt', (error) => {
  console.log(error);
});
console.log('hello world');

fs.promises
  .rename('./file2.txt', './text2.txt') //
  .then(() => console.log('Done'))
  .catch(console.error);
