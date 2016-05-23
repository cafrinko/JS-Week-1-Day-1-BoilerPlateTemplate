var Entry = require('./../js/entry.js').Entry;
$(document).ready(function(){
  $('#entry').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);

    $('#postiost').append(newEntry.write());
    $('#numPost').text(newEntry.counter());
    $('#time').text(newEntry.time());
    $('#post').show();

  });
});
