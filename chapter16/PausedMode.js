const fs = require('fs');

async function readFile(fileName)
{
    const stream = fs.createReadStream(fileName);
    stream.on('readable',()=>{
        let chunk;   
        while( chunk = stream.read() )
        {
            console.log(`Data=> ${chunk}`);
        }
        
    });
    stream.on('end',()=>{
        console.log('End => ');
    });
    stream.on('error',(error)=>{
        console.log('Error => ',error);
    });
    
}
readFile('AsyncAwait.js');