var http = require('https');

var options = {
  host: 'www.twilio.com',
  path: '/blog/2017/08/http-requests-in-node-js.html',
  method: 'GET'
};

callback = function(response) {
  var str = '';

  //another chunk of data has been received, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been received, so we just print it out here
  response.on('end', function () {
      console.log('Data ',str);
    console.log(str);
  });
}

http.request(options, callback).end();