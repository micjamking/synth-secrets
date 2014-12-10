// Base Modules
var fs = require('fs');

// Vendor Modules
var express  = require('express');
var request  = require('request');
var cheerio  = require('cheerio');
var markdown = require('html-md');

// Business Logic
var app = express();

var urls = [
  'http://www.soundonsound.com/sos/may99/articles/synthsec.htm', 
  'http://www.soundonsound.com/sos/jun99/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/jul99/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/aug99/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/sep99/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/oct99/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/nov99/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/dec99/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/jan00/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/feb00/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/mar00/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/apr00/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/may00/articles/synth.htm', 
  'http://www.soundonsound.com/sos/jun00/articles/synthsec.htm', 
  'http://www.soundonsound.com/sos/jul00/articles/synthsec.htm', 
  'http://www.soundonsound.com/sos/aug00/articles/synthsec.htm', 
  'http://www.soundonsound.com/sos/sep00/articles/synthsec.htm', 
  'http://www.soundonsound.com/sos/oct00/articles/synthsec.htm', 
  'http://www.soundonsound.com/sos/nov00/articles/synthsec.htm', 
  'http://www.soundonsound.com/sos/dec00/articles/synthsec.asp', 
  'http://www.soundonsound.com/sos/jan01/articles/synthsec.asp', 
  'http://www.soundonsound.com/sos/feb01/articles/synthsecrets.asp', 
  'http://www.soundonsound.com/sos/mar01/articles/synthsec.asp', 
  'http://www.soundonsound.com/sos/apr01/articles/synthsecrets.asp', 
  'http://www.soundonsound.com/sos/may01/articles/synthsecrets.asp', 
  'http://www.soundonsound.com/sos/jun01/articles/synthsecrets.pt26.asp', 
  'http://www.soundonsound.com/sos/jul01/articles/synthsecrets27.asp', 
  'http://www.soundonsound.com/sos/Aug01/articles/synthsecrets28.asp', 
  'http://www.soundonsound.com/sos/Sep01/articles/synthsecrets29.asp', 
  'http://www.soundonsound.com/sos/Oct01/articles/synthsecrets30.asp', 
  'http://www.soundonsound.com/sos/Nov01/articles/synthsecrets1101.asp', 
  'http://www.soundonsound.com/sos/Dec01/articles/synthsecrets1201.asp', 
  'http://www.soundonsound.com/sos/jan02/articles/synthsecrets0102.asp', 
  'http://www.soundonsound.com/sos/Feb02/articles/synthsecrets0202.asp', 
  'http://www.soundonsound.com/sos/Mar02/articles/synthsecrets0302.asp', 
  'http://www.soundonsound.com/sos/Apr02/articles/synthsecrets0402.asp', 
  'http://www.soundonsound.com/sos/May02/articles/synthsecrets0502.asp', 
  'http://www.soundonsound.com/sos/Jun02/articles/synthsecrets0602.asp', 
  'http://www.soundonsound.com/sos/Jul02/articles/synthsecrets0702.asp', 
  'http://www.soundonsound.com/sos/Aug02/articles/synthsecrets0802.asp', 
  'http://www.soundonsound.com/sos/Sep02/articles/synthsecrets09.asp', 
  'http://www.soundonsound.com/sos/Oct02/articles/synthsecrets10.asp', 
  'http://www.soundonsound.com/sos/Nov02/articles/synthsecrets1102.asp', 
  'http://www.soundonsound.com/sos/Dec02/articles/synthsecrets1202.asp', 
  'http://www.soundonsound.com/sos/Jan03/articles/synthsecrets0103.asp', 
  'http://www.soundonsound.com/sos/Feb03/articles/synthsecrets46.asp', 
  'http://www.soundonsound.com/sos/Mar03/articles/synthsecrets47.asp', 
  'http://www.soundonsound.com/sos/apr03/articles/synthsecrets48.asp', 
  'http://www.soundonsound.com/sos/May03/articles/synthsecrets49.asp', 
  'http://www.soundonsound.com/sos/Jun03/articles/synthsecrets50.asp', 
  'http://www.soundonsound.com/sos/Jul03/articles/synthsecrets51.asp', 
  'http://www.soundonsound.com/sos/aug03/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/sep03/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/oct03/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/nov03/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/dec03/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/jan04/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/feb04/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/mar04/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/apr04/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/may04/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/jun04/articles/synthsecrets.htm', 
  'http://www.soundonsound.com/sos/jul04/articles/synthsecrets.htm'
];

app.get('/', function(req, res){

  var finalMarkDown = '';
  
  // Loop over array of urls
  for (var i = 0; i < urls.length; i++){

    // The URL we will scrape from
    var currentURL = urls[i];

    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html
    request(currentURL, function(error, response, html){

      // First we'll check to make sure no errors occurred when making the request
      if(!error){

        // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
        var $ = cheerio.load(html);

        // Grab title
        var title = $('.TitleBox > .MainTitle')[0];

        // Grab article content, minus intro-text, author byline, and sidebar columns
        var article = $('.col1 > .TitleBox').nextAll().not(':empty, .introtext, .author, .bodyf, .Published, .col2, .col3').clone();

        // Create DOM element using title and article
        var html = $('<div>').append(title).append(article).html();
        
        finalMarkDown += html; 
      }

      if (i === urls.length){
        // To write to the system we will use the built in 'fs' library.
        // In this example we will pass 3 parameters to the writeFile function
        // Parameter 1 :  output.json - this is what the created filename will be called
        // Parameter 2 :  markdown(html) - the data to write, here we do an extra step by calling markdown() to convert our html data to markdown syntax
        // Parameter 3 :  callback function - a callback function to let us know the status of our function
        fs.writeFile('README.md', markdown(finalMarkDown), function(err){
          console.log('File successfully written! - Check your project directory for the README.md file');
        });
      }
    });
  }

  // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
  res.send('Check your console!');
});

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;