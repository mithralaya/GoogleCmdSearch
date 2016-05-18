"use strict";

var request = require('request');
var cheerio = require('cheerio');
var W = require('TFWhatIs');

exports.index = function (query) {
  var $, results;
  request('https://google.com/search?q='+query, function (error, response, html) {
    if (!error && response.statusCode === 200) {
      $ = cheerio.load(html, {
        normalizeWhitespace: false,
        xmlMode: false,
        decodeEntities: true
      });
      results = $('#ires').html();
      $('.g').each(function(i, element){
        W.for(element.children, function(index, value, children){
          W.for(value.children, function(i, v, value){
            if(v.name === "a") {
              console.log(v.attribs.href.replace("/url?q="));
            }
            if(v.name === "span") {
              console.log(v.children.data);
            }
          });
        });
      });
    }
  });

};
