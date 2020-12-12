var https = require('https');

function callback(content)
{
    console.log("Content >>",content);
}
function callAjax(url,callback)
{
    var request = https.get(url);
    request.on("response",response=>{
        response.setEncoding("utf-8");
        console.log("On response =>");
        let httpStatus = response.statusCode;
        console.log("Http status ",httpStatus);
        let body = "";
        response.on("data",chunk=>{console.log("Data ",chunk);body+=chunk});
        response.on("end",()=>{
            console.log("On End");
            callback(body);
        })


    });
}
let url = "https://jsonplaceholder.typicode.com/todos/1";
callAjax(url,callback);