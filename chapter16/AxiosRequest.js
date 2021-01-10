const axios = require('axios');

let url = 'https://jsonplaceholder.typicode.com/users?_limit=2';
axios.get(url)
     .then((res)=>{
         console.log(`Status Code ${res.status}`);
         //console.log('Response ',res);
         console.log('Response ',res.data);
         
     })
     .catch((error)=>{
        console.error(error);
     });