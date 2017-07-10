var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var Item = require('./mongoDB.js');
var lettersPermutation = require('./textAlgo.js');

// init app
var app = express();

// console.log('What does the algo look like: ', lettersPermutation(2));

app.get('/scrape', function (req, res) {
  // test cases
  // var listOfUrls = ["https://jobs.lever.co/nima", "https://jobs.lever.co/addepar", 'https://jobs.lever.co/hellosign', 'https://jobs.lever.co/fathomhealth', 'https://jobs.lever.co/fathom', 'https://jobs.lever.co/fat'];
  // Where the web scraping will be done
  // var url = "https://jobs.lever.co/nima";
  var listOfUrls = lettersPermutation(4);

  listOfUrls.forEach(function (url) {
    var newUrl = `https://jobs.lever.co/${url.join('')}`;
    console.log(newUrl)
    request(newUrl, function (error, response, html) {
      if(!error){
        // console.log(html.includes('San Francisco'), html.includes('Software'))
        var $ = cheerio.load(html);
        if(response.statusCode === 200){
          if($('body').text().includes('Francisco')){
            var obj = new Item({
              url : newUrl,
              websiteName: newUrl.slice(22)
            })
            obj.save(function (err, data) {
              if(err){
                throw err;
              } else {
                console.log(`console logging Data: ${data}`)
              }
            })
          }
        }
      }
    });
  });
  res.send('Hi');

})

app.get('/allUrl', function (req, res, next) {
  // get all users;
  Item.find({}, function (err, users) {
    if(err){
      throw err;
    } else {
      console.log(users);
    }
  })
})

app.listen('3000', function () {
  console.log('listening on port 3000')
})