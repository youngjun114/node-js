const fs = require('fs');

const readStream = fs.createReadStream('./file.txt', {
  // amount of data to read at once
  //   highWaterMark: 8, // 64 kb by default
  //   encoding: 'utf-8',
});

const data = [];

readStream.on('data', (chunk) => {
  data.push(chunk);
  console.count('data');
});

readStream.on('end', () => {
  console.log(data.join(''));
});

readStream.on('error', (error) => console.error);

// chaining
const readStream2 = fs
  .createReadStream('./file.txt') //
  .on('data', (chunk) => {
    data.push(chunk);
    console.count('data');
  })
  .on('end', () => {
    console.log(data.join(''));
  })
  .on('error', (error) => console.error);

// if use 'once' instead of 'on', it will only bring callback function once
