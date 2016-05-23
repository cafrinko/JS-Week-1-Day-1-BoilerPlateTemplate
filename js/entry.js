var moment = require('moment');

exports.Entry = function Entry(title, body){
  this.title = title;
  this.body = body;
};

// exports.Entry.prototype.write = function(){
//   return "Entry Title: " + this.title + " Entry Body: " + this.body;
// };

exports.Entry.prototype.counter = function(){
  return this.body.split(" ").length;
};

exports.Entry.prototype.write = function(){
  return "<br> <span class='strong'>Entry Title:</span> " + this.title + "<br> <span class='strong'>Entry Body:</span> " + this.body + "<br> <hr>";
};


exports.Entry.prototype.time = function(){
  return moment().format('MMMM Do YYYY, h:mm:ss a');
};
