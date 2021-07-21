const fs = require('fs').promises;

//  read a file
fs.readFile('./file.txt') // returns buffer
  .then((data) => console.log(data))
  .catch(console.error);

fs.readFile('./file.txt', 'utf8') //
  .then((data) => console.log(data))
  .catch(console.error);

// write a file
fs.writeFile('./file.txt', 'I am a future developer') // replace all contents in the file
  .catch(console.error);

// write a file keeping previous data
fs.appendFile('./file.txt', 'Obey me');

// copy  file
// this is empty because writing file is  asynchronous
fs.copyFile('./file.txt', './file-copy.txt');

// if want to copy file with data in it use as promise
fs.appendFile('./file.txt', 'Copied!') //
  .then(() => fs.copyFile('./file.txt', './file-copy.txt')) //
  .catch(console.error);

// folder
fs.mkdir('sub-folder') //
  .catch(console.error);

fs.readdir('./') //
  .then(console.log)
  .catch(console.error);
