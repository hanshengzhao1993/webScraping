var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

// init app
var app = express();

app.get('/scape', function (req, res) {

  // Where the web scraping will be done
  var url = "https://jobs.lever.co/nima";

  request(url, function (error, response, html) {
    if(!error){
      console.log(html);
      console.log(html.includes('San Francisco'), html.includes('Software'))
      var $ = cheerio.load(html);
      // console.log('What is the dollar sign: ',$)
    }
  })


})

app.listen('3000', function () {
  console.log('listening on port 3000')
})