const child_process = require('child_process');
const util = require('util');

let child = child_process.fork(`${__dirname}/ChildProcess.js`);

child.send({x:4,y:3});
child.on('message',message=>{
    console.log('Message ', message);
    child.disconnect();
});