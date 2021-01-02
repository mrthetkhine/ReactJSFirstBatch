const fs = require('fs');
setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout 2');
  }, 0);
  setImmediate(() => {
    console.log('immediate 2');
  });
});