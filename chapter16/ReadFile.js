const fs = require('fs');

function readConfigFile(path,callBack)
{
    fs.readFile(path,"utf-8",(err,text)=>{
        console.log("call back inside read file");
        if(err)
        {
            console.error(err);
            callBack(null);
            return;
        }
        let data = text;
        callBack(text);
    });
    console.log("After fs.read call");
}
function callBack(data)
{
    console.log('Data received ',data);
}
readConfigFile('Hello.js',callBack);
console.log("Code after read hello.js");