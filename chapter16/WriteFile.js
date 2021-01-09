const fs = require('fs');

let output = fs.createWriteStream('number.txt');
for(var i=0;i< 100;i++)
{
    output.write(`${i}\n`);
}
output.end();