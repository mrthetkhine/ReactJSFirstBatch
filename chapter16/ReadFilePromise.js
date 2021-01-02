const fs = require('fs');
const util = require('util');

const psf = {
    readFile : util.promisify(fs.readFile)
}
function readConfigFile(path)
{
    return psf.readFile(path,"utf-8")
            .then(text=>console.log('Data fetched ',text));
}

readConfigFile('Hello.js');
console.log("Code after read hello.js");