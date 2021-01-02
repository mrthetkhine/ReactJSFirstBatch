const fs = require('fs');
const util = require('util');

const psf = {
    readFile : util.promisify(fs.readFile)
}
async function readConfigFile(path)
{
    let text = await psf.readFile(path,"utf-8");
    console.log("Code after await ",text);
    return text;
}

readConfigFile('Hello.js');

console.log("Code after read hello.js");