const child_process = require('child_process');
const util = require('util');

let listing  = child_process.execSync("ls -l",{
    encoding: "utf-8"
});
console.log('Listing ',listing);

const exceP = util.promisify(child_process.exec);
exceP('ls -l',{
    encoding: "utf-8"
}).then(result=>console.log('Result ',result));