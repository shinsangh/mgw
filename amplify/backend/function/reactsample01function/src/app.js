/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/



var axios = require('axios') 
const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 **********************/

 app.get('/notes', function(req, res) {
  const apitoken = process.env.KINTONE_API_TOKEN // set kintone API-Token
  console.log(req);
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Cybozu-API-Token': apitoken,
    },
    data: req.query,
  }  
  axios.get('https://<sub-domain>.cybozu.com/k/v1/records.json', config)
    .then(response => {
      res.json({
        success: true,
        notes: response.data
      })
    })
    .catch(error => {
      res.json({
        success: false,
        error
      })
    })
 });

app.get('/notes/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/notes', function(req, res) {
  const apitoken = process.env.KINTONE_API_TOKEN // set kintone API-Token
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Cybozu-API-Token': apitoken,
    },
  }
  axios.post('https://<sub-domain>.cybozu.com/k/v1/record.json', req.body, config)
   .then(response => {
    res.json({
      success: true,
      notes: response.data
    })
  })
  .catch(error => {
    res.json({
      success: false,
      error
    })
  })
 });

app.post('/notes/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/notes', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/notes/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/notes', function(req, res) {
  const apitoken = process.env.KINTONE_API_TOKEN // set kintone API-Token
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Cybozu-API-Token': apitoken,
    },
    data: req.body,
  }
  axios.delete('https://<sub-domain>.cybozu.com/k/v1/records.json', config)
   .then(response => {
    res.json({
      success: true,
      notes: response.data
    })
  })
  .catch(error => {
    res.json({
      success: false,
      error
    })
  })
 });

app.delete('/notes/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
