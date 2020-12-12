var fs = require('fs');
 
console.log("Before file read");
fs.readFile('read.js', 'utf8', function(err, contents) {
    console.log('Callback Content>>',contents);
});
 
console.log('after calling readFile');