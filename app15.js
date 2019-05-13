//GET API  npm i dark-sky-api
const DarkSkyApi = require('dark-sky-api');
DarkSkyApi.apiKey = "e91c5f7525701b0985f48848be3e9bd8";//SET ACCESS KEY



// //PROMISE
// let clima = new Promise(function(resolve, reject){

//   let  request = require('request');//GET API  npm i request
//   request('https://api.darksky.net/forecast/e91c5f7525701b0985f48848be3e9bd8/-19.24,-103.72?exclude=hourly,flags,daily,minutely', function (error, response, body) {
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     if(error=='null'){
//       console.log('error:', error); // Print the error if one occurred
//       reject();
//     }else{
      
//       let dataOb = JSON.parse(body); // CONVERT TO OBJECT, CAUSE BODY IS TEXT
//       console.log(`Temperature: ${dataOb.currently.temperature}`); // Print.
//       resolve();
//     }
//   });
// });

// clima.then(function(){//RESOLVED
//   console.log("Success");
  
// }).catch(function(){//REJECTED
//   console.log("Error");
  
// });

let Uv = require('./uv');
let Temp = require('./temp');

let clima = new Promise(function(resolve, reject){

  let  request = require('request');//GET API  npm i request
  request('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBzf_TvSJT9tg5b3HmN2Rlux_L-6FS0cs8', function (error, response, body) {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    if(error=='null'){
      
      console.log('error:', error); // Print the error if one occurred
      reject();
    }else{
      let dataOb = JSON.parse(body); // CONVERT TO OBJECT, CAUSE BODY IS TEXT}
      console.log(dataOb.results[0]);
      let location = dataOb.results[0].geometry.location;
  
        
      Temp.getTemp(location.lat, location.lng);
      Uv.getUv(location.lat, location.lng);
      resolve();
    }
  });
});

clima.then(function(){//RESOLVED
  console.log("Success");
  
}).catch(function(){//REJECTED
  console.log("Error");
  
});
