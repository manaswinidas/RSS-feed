const mongoose = require('mongoose');

var Schema = mongoose.Schema();

var newUser = new Schema ({
   Rssfeeds: String,
   date : Date
});

var soModel = mongoose.model('feeds', newUser);
module.exports=soModel;
