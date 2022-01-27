process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const express = require('express');
const path = require('path');
// const fetch = require("node-fetch");
var request = require("request");
// var ActiveDirectory = require('activedirectory');
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// 1-	http:// 172.24.80.99:8080/SOA/P2P/getPac008Send/SEND/2021-12-24/2021-12-24/0/10
// 2-	http:// 172.24.80.99:8081/SOA/P2P/getPac002Rec/ALFHPKKA2112240336245692
// 3-	http:// 172.24.80.99:8082/SOA/P2P/getPac008Rec/2021-12-24/2021-12-24/0/10
// 4-	http:// 172.24.80.99:8083/SOA/P2P/getPac002Send/UBL241221125542153069372c


app.get('/getPac008Send', function (req, res) {
    
    request.post({
      "headers": { "content-type": "application/json" },
      "url": "http://mpg2getpac008send-baf-mpg2-raast.apps.openshiftuat.baf.com:50054",
      // "body": req.body.body,
      json:true
    }, (error, response, body) => {
      if(error) {
          return console.log(error);
      }
      console.log(body);
      res.send(body);
    });
    
});

app.get('/getPac002Recieve', function (req, res) {

    request.post({
      "headers": { "content-type": "application/json" },
      "url": `http://mpg2getpac002rec-baf-mpg2-raast.apps.openshiftuat.baf.com:50051/${req.query.messageID}`,
      json:true
    }, (error, response, body) => {
      if(error) {
          return console.log(error);
      }
      console.log(body);
      res.send(body);
    });

});

app.get('/getPac008Recieve', function (req, res) {
    
    request.post({
      "headers": { "content-type": "application/json" },
      "url": "http://mpg2getpac008rec-baf-mpg2-raast.apps.openshiftuat.baf.com:50053",
      // "body": req.body.body,
      json:true
    }, (error, response, body) => {
      if(error) {
          return console.log(error);
      }
      console.log(body);
      res.send(body);
    });
    
});

app.get('/getPac002Send', function (req, res) {

    request.post({
      "headers": { "content-type": "application/json" },
      "url": `http://mpg2getpac002send-baf-mpg2-raast.apps.openshiftuat.baf.com:50052/${req.query.messageID}`,
      json:true
    }, (error, response, body) => {
      if(error) {
          return console.log(error);
      }
      console.log(body);
      res.send(body);
    });

});


// app.get('/authenticate', function (req, res) {
    
//     var config = { url: 'ldap://172.24.3.30:389',
//                 baseDN: 'dc=baf,dc=com',
//                 username: `${req.query.username}@baf.com`,
//                 password: req.query.password }
//     var ad = new ActiveDirectory(config);
 
//     var username = `${req.query.username}@baf.com`;
//     var password = req.query.password;

//     ad.authenticate(username, password, function(err, auth) {
//     if (err) {
//         console.log('ERROR: '+JSON.stringify(err));
//         return res.send("False");
//     }
//     if (auth) {
//         console.log('Authenticated!');
//         return res.send("True");
//     }
//     else {
//         console.log('Authentication failed!');
//         return res.send("False");
//     }
//     });

// });


const server = app.listen(process.env.PORT || 8080);
server.timeout = 60 * 1000;


// var send_008 = {
//     "count": 0,
//     "data": [
//   {
//       "ID": 318670,
//       "document": 
//       "dttm": "20211224190226300",
//       "msgID": "ALFHPKKA2112240702254440",
//       "postReqID": "ac58ba0f-3709-4237-92e0-b1b037b6c752",
//       "receiver": "SBPPPKKAXIPS",
//       "requestType": "pacs.008.001.08",
//       "sender": "ALFHPKKAFNRT",
//       "status": "SEND",
//       "traceReference": "ALFHPKKA2112240702254440"
//   },
//   {
//       "ID": 318669,
//       "document": 
//       "dttm": "20211224185553716",
//       "msgID": "ALFHPKKA2112240655525869",
//       "postReqID": "9fc1ca6f-a33a-4c74-b2c7-b64299cb89e0",
//       "receiver": "SBPPPKKAXIPS",
//       "requestType": "pacs.008.001.08",
//       "sender": "ALFHPKKAFNRT",
//       "status": "SEND",
//       "traceReference": "ALFHPKKA2112240655525869"
//   }
// ]};

// res.send(JSON.stringify(send_008));


// var recieve_002 = {
//     "count": 0,
//     "data": [
//         {
//             "ID": 297046,
//             "document": 
//             "dttm": "20211224153642679",
//             "msgID": "ALFHPKKA2112240336245692",
//             "postReqID": "afef8be3-53ea-4d69-9c5f-02cef496d76f",
//             "receiver": "ALFHPKKAXXXX",
//             "requestType": "pacs.002.001.10",
//             "sender": "SBPPPKKAAIPS",
//             "status": "RJCT",
//             "traceReference": "ALFHPKKA2112240336245692"
//         }
//     ],
//     "responseCode": 0,
//     "responseDescription": "SUCCESS"
// }

// res.send(JSON.stringify(recieve_002));


