//GET API  npm i dark-sky-api
const DarkSkyApi = require('dark-sky-api');
DarkSkyApi.apiKey = "e91c5f7525701b0985f48848be3e9bd8";//SET ACCESS KEY


// let  request = require('request');//GET API  npm i request
// request('https://api.darksky.net/forecast/e91c5f7525701b0985f48848be3e9bd8/-19.24,-103.72?exclude=hourly,flags,daily,minutely', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   let dataOb = JSON.parse(body); // CONVERT TO OBJECT, CAUSE BODY IS TEXT
//   console.log(`Temperature: ${dataOb.currently.temperature}`); // Print.
// });





let  request = require('request');//GET API  npm i request
request('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBbEbIrVZ62Pm8zmImwWhm-0_9FyemWoiE', function (error, response, body) {
  if(error==null){
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    let dataOb = JSON.parse(body); // CONVERT TO OBJECT, CAUSE BODY IS TEXT}
    console.log(dataOb.results[0]);
    let location = dataOb.results[0].geometry.location;

      request(`https://api.darksky.net/forecast/e91c5f7525701b0985f48848be3e9bd8/${location.lat},${location.lng}?exclude=hourly,flags,daily,minutely`, function (error, response, body) {
        if(error==null){
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          let dataOb = JSON.parse(body); // CONVERT TO OBJECT, CAUSE BODY IS TEXT
          console.log(`Temperature: ${dataOb.currently.temperature}`); // Print.
        }else{
          console.log('error:', error); // Print the error if one occurred
        }
      });

      var options = { method: 'GET',
        url: 'https://api.openuv.io/api/v1/uv',
        qs: { lat: location.lat, lng: location.lng, dt: '2018-01-24T10:50:52.283Z' },
        headers: 
        { 'content-type': 'application/json',
          'x-access-token': '42f1db4044e996f8ee1ebecf622dc2a0' } };
      request(options, function (error, response, body) {
        if (error==null){

          let dataOb = JSON.parse(body);
          console.log(`UV-MAX: ${dataOb.result.uv_max}`);
        }else{
          console.log(error);
        }
      });

  }else{
    console.log('error:', error); // Print the error if one occurred
  }  
});