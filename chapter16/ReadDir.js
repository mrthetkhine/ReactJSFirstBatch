const fs = require('fs');

let cur = fs.readdirSync("/");
console.log(cur);

fs.promises.readdir('/Users',{withFileTypes: true})
    .then(entries=>{
        entries
        .filter(entry=> entry.isDirectory())
        .map(entry=>entry.name)
        .forEach(name=>console.log('Promise dir ',name));
    })
    .catch(console.error);