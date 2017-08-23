var express = require('express');
var router = express.Router();
var feedparser = require('ortoo-feedparser');

router.get('/', function(req,res){
    var url = "http://theindiansociety.org/feed";
    feedparser.parseUrl(url).on('article', function(article){
      var title = article.title;
      console.log(title);
    });
});
