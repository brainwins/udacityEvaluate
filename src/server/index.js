var path = require('path')
const fetch = require('node-fetch');
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();
projectData = {};
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1'

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/addData', addData)

app.post('/apiCall', (req, res) => {

  const url = req.body.usertext;
  console.log(url)
  //process.env.API_KEY;
  const apiKey = "5c741a9adeb443e2922f5191320b2018"

    fetch(baseURL+'?key='+apiKey+'&lang=en'+'&url='+url)
      .then(response => response.json())
      .then(response => res.send(response))
      .catch(error => console.log('error', error));
})


function addData (req, res) {
  const data = req.body
  projectData["confidence"] = data.confidence
  projectData["agreement"] = data.agreement
  projectData["irony"] = data.irony
  projectData["subjectivity"] = data.subjectivity
  res.send(projectData)
  console.log("from server", projectData)
}

app.get('/all', sendData);

function sendData (request, response) {
  response.send(projectData);
};

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
