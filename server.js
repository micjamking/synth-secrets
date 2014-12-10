// Base Modules
var fs = require('fs');

// Vendor Modules
var express  = require('express');
var request  = require('request');
var cheerio  = require('cheerio');
var markdown = require('html-md');

// App
var app = express();

// Model
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

  var pages = [];
  
  // Creates markdown files from html
  var createFiles = function(index, html){
    
    // Create each pages
    fs.writeFile('part-' + (index + 1) + '.md', markdown(html), function(err){
      console.log('Part ' + (index + 1) + ' markdown file successfully written!');
    });

    // Create table of contents if at the end
    if ((index + 1 ) === urls.length){
      var TableOfContents =
        '<h1>Synth Secrets</h1><br/>' +
        '<em>Article series on subtractive synthesis from ' + 
        '<a href="http://www.soundonsound.com/sos/allsynthsecrets.htm">Sound on Sound</a></em><br/>' + 
        '<h2>Table of Contents</h2><br/><ol>' + pages.join('') + '</ol>';

      fs.writeFile('README.md', markdown(TableOfContents), function(err){
        console.log('README markdown file successfully written!');
      });
    }
  };
  
  // Get the page to scrape
  var requestPage = function(index){
 
    request(urls[index], function(error, response, html){
      if(!error){
        var $        = cheerio.load(html);
        var title    = $('.TitleBox > .MainTitle');
        var link     = $('<em>').html('Original article: <a href="' + urls[index] + '">' + urls[index] + '</a>');
        var article  = $('.col1 > .TitleBox').nextAll().not(':empty, .introtext, .author, .bodyf, .Published, .col2, .col3').clone();
        var html     = $('<div>').append(title[0]).append('<br/>').append(link).append(article).html();
        pages[index] = '<li><a href="/part-' + (index + 1) + '.md">' + title.text() + '</a></li>';
        
        createFiles(index, html);
      } else {
        console.log(error);
      }
    });
  };
  
  // Iterate over urls & fire GET requet
  for (var i = 0; i < urls.length; i++){
    requestPage(i);
  }

  res.send('Check your console!');
});

app.listen('8081')
console.log('Starting screen scrape...');
exports = module.exports = app;