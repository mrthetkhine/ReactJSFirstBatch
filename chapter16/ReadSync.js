const fs = require('fs');
let buffer = fs.readFileSync('Path.js');
console.log('buffer ',buffer.toString());

fs.readFile('Path.js',(err,buffer)=>{
    if(err)
    {
        console.log('Err in file read');
    }
    else
    {
        console.log('Buffer read=> ', buffer.toString());
    }
});
