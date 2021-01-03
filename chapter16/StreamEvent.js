const fs = require('fs');

let input = fs.createReadStream('EventEmitter.js');
input.on('data',(chunk)=>{
    console.log("Data event ",chunk);
});
input.on('end',()=>{
    console.log('Reading complete');
});
input.on('error',()=>{
    console.log('Input error');
});