const fs = require('fs');

const beforeMem = process.memoryUsage().rss;
// read file
fs.readFile('./file.txt', (_, data) => {
  // then write file to new file
  fs.writeFile('./file2.txt', data, () => {});
  // calculate actual memory usage
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`);
});

// output: 5.4453125MB