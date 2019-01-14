const https = require('https');

function getHTML (options, callback) {
  let totalResponse = '';
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      totalResponse += chunk + '\n';
    });

    response.on('end', function (){
      callback(totalResponse);
    });
  });
}

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function printHTML (html) {
  console.log('from printHTML:', html);
}

getHTML(requestOptions, printHTML);
