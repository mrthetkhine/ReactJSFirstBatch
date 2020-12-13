const https = require("https");
function fetch(url)
{
    return new Promise( (resolve,reject)=>{
        var request = https.get(url,response=>{
            if(response.statusCode !== 200)
            {
                reject(new Error(`HTTP status code ${response.statusCode}`));
                response.resume();
            }
            else
            {
                let body = "";
                response.on("data",chunk=>{console.log("Data ",chunk);body+=chunk});
                response.on("end",()=>{
                    console.log("On End");
                    var json;
                    try
                    {
                        json = JSON.parse(body);
                        resolve(json);
                    }
                    catch(e)
                    {
                        reject(e);
                    }
                    

                })
            }
        });
        request.on("error", error => { 
            reject(error);
        });
    })
}
let url = "https://jsonplaceholder.typicode.com/todos/1";
var p = fetch(url);
p.then(json=> console.log('result json ',json));