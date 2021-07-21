const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./file.txt');
const writeStream = fs.createWriteStream('./file4.zip');
const zlibStream = zlib.createGzip();

const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on('finish', () => {
  console.log('done!');
});

// when  creating server,
// it will send data after finishing reading the file
const http = require('http');
const server = http.createServer((req, res) => {
  fs.readFile('file.txt', (err, data) => {
    res.end(data);
  });
});
server.listen(3000);

// use stream and pipe instead
const http = require('http');
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('./file.txt');
  stream.pipe(res);
});
server.listen(3000);
