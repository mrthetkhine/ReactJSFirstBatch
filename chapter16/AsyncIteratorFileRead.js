const fs = require('fs');

async function readFile(fileName)
{
    const stream = fs.createReadStream(fileName,{
        highWaterMark: 50
    });
    for await(const chunk of stream)
    {
        console.log(`Data ${chunk}`);
    }
    
}
readFile('AsyncAwait.js');