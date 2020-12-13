const fs = require("fs");
async function readFile(fileName)
{
    let stream = fs.createReadStream(fileName,{encoding:'utf-8'});
    for await(let chunk of stream)
    {
        console.log("Chunk ",chunk);
    }
}
readFile("Async.html");