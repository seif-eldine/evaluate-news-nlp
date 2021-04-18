const dotenv = require('dotenv');
dotenv.config({ path:__dirname + '/../../.env' });
var FormData = require('form-data');
const fetch = require('node-fetch');
const cors = require('cors');

var path = require('path');
const express = require('express');
const app = express();

app.use(cors());
//app.use(express.static(__dirname + '/../../dist'));
app.use(express.static( path.resolve('dist') ))

app.get('/', function (req, res) {
    //res.sendFile(__dirname + '/../../dist/index.html')
    res.sendFile('index.html')
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});

app.get('/analyzation', function (req, res) {

    form = new FormData();

    form.append("key", process.env.API_KEY);
    form.append("txt", req.query.txt);
    form.append("model", "general");
    form.append("lang", req.query.lang);  // 2-letter code, like en es fr ...
    
    const requestOptions = {
      method: 'POST',
      body: form,
      redirect: 'follow'
    };
    //score_tag
    //agreement
    //subjectivity
    //confidence
    //irony
   
    fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
      .then(response => {
        return response.json()
      })
      .then(data => {
        res.json({
          text: data.sentence_list[0].text,
          confidence: data.confidence,
          agreement: data.agreement,
          irony: data.irony,
          scoreTag: data.score_tag,
          subjectivity: data.subjectivity
        })
      })
      .catch(error => { 
        console.log('Error is found', error);
        res.sendStatus(500)
      });
});
