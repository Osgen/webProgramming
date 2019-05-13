


module.exports.getUv= function(locLat, locLng){
    
    let uv = new Promise(function(resolve, reject){

        var options = { method: 'GET',
    url: 'https://api.openuv.io/api/v1/uv',
    qs: { lat: locLat, lng: locLng, dt: '2018-01-24T10:50:52.283Z' },
    headers: 
    { 'content-type': 'application/json',
      'x-access-token': '42f1db4044e996f8ee1ebecf622dc2a0' } };

    let  request = require('request');//GET API  npm i request
        request(options, function (error, response, body) {
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            if(error=='null'){
            console.log('error:', error); // Print the error if one occurred
            reject();
            }else{
            
            let dataOb = JSON.parse(body); // CONVERT TO OBJECT, CAUSE BODY IS TEXT
            console.log(`UV-MAX: ${dataOb.result.uv_max}`); // Print.
            resolve();
            }
        });
    });

    uv.then(function(){//RESOLVED
    console.log("Success");
    
    }).catch(function(){//REJECTED
    console.log("Error");
    
    });
};