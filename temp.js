


module.exports.getTemp= function(locLat, locLng){
    
    let temp = new Promise(function(resolve, reject){

    let  request = require('request');//GET API  npm i request
        request(`https://api.darksky.net/forecast/e91c5f7525701b0985f48848be3e9bd8/${locLat},${locLng}?exclude=hourly,flags,daily,minutely`, function (error, response, body) {
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            if(error=='null'){
            console.log('error:', error); // Print the error if one occurred
            reject();
            }else{
            
            let dataOb = JSON.parse(body); // CONVERT TO OBJECT, CAUSE BODY IS TEXT
            console.log(`Temperature: ${dataOb.currently.temperature}`); // Print.
            resolve();
            }
        });
    });

    temp.then(function(){//RESOLVED
    console.log("Success");
    
    }).catch(function(){//REJECTED
    console.log("Error");
    
    });
};