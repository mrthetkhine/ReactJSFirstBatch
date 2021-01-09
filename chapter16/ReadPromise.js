const fs = require('fs');

fs.promises 
    .readFile('Path.js','utf-8')
    .then(text=> console.log('Data with promise=> ',text))
    .catch(err=>{
        console.log('Error ',err);
    });

async function processFile(fileName, encoding='utf-8')
{
    let text = await fs.promises.readFile(fileName,encoding);
    console.log('Text with async await ',text);
} 
processFile('Hello.js');