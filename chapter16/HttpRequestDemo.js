let https = require('https');

let url = 'https://jsonplaceholder.typicode.com/users?_limit=2';
let options = {
    host: 'jsonplaceholder.typicode.com',
    path: '/users?_limit=2',
    method: 'GET',
    headers: {
        'Accept': 'application/json'
      }
   
}
let request = https.request(options,(res)=>{
    if( res.statusCode !== 200)
    {
        console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
        res.resume();
        return;
    }
    let data = '';
    res.on('data',(chunk)=>{
        data += chunk;
    });
    res.on('close',()=>{
        console.log('All data received');
        let json = JSON.parse(data);
        console.log('Data ', json);
    });
});
request.on('error',(err)=>{
    console.error(`Encountered an error trying to make a request: ${err.message}`);
});
request.end();