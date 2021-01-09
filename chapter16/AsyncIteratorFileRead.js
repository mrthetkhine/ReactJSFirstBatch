const fs = require('fs');
async function readFile()
{
    const stream = fs.createReadStream('AsyncAwait.js',{
        highWaterMark: 50
    });
    for await(const chunk of stream)
    {
        console.log(`Data ${chunk}`);
    }
    
}
readFile();