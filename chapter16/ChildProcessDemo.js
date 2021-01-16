const child_process = require('child_process');

let listing  = child_process.execSync("ls -l",{
    encoding: "utf-8"
});
console.log('Listing ',listing);