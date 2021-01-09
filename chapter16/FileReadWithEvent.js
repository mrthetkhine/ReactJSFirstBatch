const fs = require('fs');

async function readFile(fileName)
{
    const stream = fs.createReadStream(fileName);
    stream.on('data',(chunk)=>{
        console.log('Data=> ',chunk.toString());
    });
    stream.on('end',()=>{
        console.log('End => ');
    });
    stream.on('error',(error)=>{
        console.log('Error => ',error);
    });
}
readFile('AsyncAwait2.js');