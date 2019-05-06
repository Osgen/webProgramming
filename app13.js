//GET API  npm i dark-sky-api
const DarkSkyApi = require('dark-sky-api');
DarkSkyApi.apiKey = "e91c5f7525701b0985f48848be3e9bd8";//SET ACCESS KEY


let  request = require('request');//GET API  npm i request
request('https://api.darksky.net/forecast/e91c5f7525701b0985f48848be3e9bd8/-19.24,-103.72?exclude=hourly,flags,daily,minutely', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  let dataOb = JSON.parse(body); // CONVERT TO OBJECT, CAUSE BODY IS TEXT
  console.log(`Temperature: ${dataOb.currently.temperature}`); // Print.
});