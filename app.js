var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var insert = require('mongoDB');

// init app
var app = express();

app.get('/scape', function (req, res) {
  var listOfUrls = ["https://jobs.lever.co/nima", "https://jobs.lever.co/addepar", 'https://jobs.lever.co/hellosign', 'https://jobs.lever.co/fathomhealth', 'https://jobs.lever.co/fathom', 'https://jobs.lever.co/fat'];
  var answers = [];

  // Where the web scraping will be done
  // var url = "https://jobs.lever.co/nima";

  listOfUrls.forEach(function (url) {
    request(url, function (error, response, html) {
      if(!error){
        // console.log(html.includes('San Francisco'), html.includes('Software'))
        var $ = cheerio.load(html);
        console.log('THIS IS THE RESPONSE: ', response.statusCode)
        console.log(`THIS IS THE URL: ${url}`, $('body').text());
        // console.log('What is the dollar sign: ',$)
        // if( html.includes('San Francisco') ){
        //   console.log('in here?')
        //   answers.push(url);
        // }
      }
    });
  });
  console.log(answers)

  res.send(answers);

})

app.listen('3000', function () {
  console.log('listening on port 3000')
})