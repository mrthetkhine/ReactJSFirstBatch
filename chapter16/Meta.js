const fs = require('fs');

let stat = fs.statSync('number2.txt');
console.log('isFile ',stat.isFile());
console.log('is Directory ',stat.isDirectory());
console.log('Size ',stat.size);
console.log('At time last read ',stat.atime);
console.log('Uid ',stat.uid);
console.log('Group id ',stat.gid);
console.log('File mode ',stat.mode.toString(8));