var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

// init app
var app = express();

app.get('/scape', function (req, res) {

  // Where the web scraping will be done

})

app.listen('3000', function () {
  console.log('listening on port 3000')
})