var express = require('express');
var http = require('http');
var utils = require('./utils');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/train/:id', function(req, res, next) {
   var hmcaKey = utils.getHmacKey();
    var urlPath = "/test/route/train/12004/format/json/pbapikey/966a11c3ac4ba62f1f8ae127be82ddb0/pbapisign/" + hmcaKey;
    var url = {
        host : 'railpnrapi.com', // here only the domain name
        // (no http/https !)
        //port : 443,
        path : urlPath, // the rest of the url with parameters if needed
        method : 'GET' // do GET
    };
    http.get(url, function (response) {
        console.log("Got response: " + response.statusCode);
        var output = '';
        
        response.setEncoding('utf-8');
        response.on("data", function (chunk) {
            console.log("BODY: " + chunk);
           // res.send('<h1>' + chunk + '</h1>');
            output += chunk;
        });

        response.on('end', function () {
            var obj = JSON.parse(output);
            res.jsonp({data:obj});
        });

    }).on('error', function (e) {
        console.log("Got error: " + e.message);
    });
    
});

module.exports = router;
