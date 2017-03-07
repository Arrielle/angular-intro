var express = require('express');
var app = express();
var port = process.env.PORT || 5000; //process.env.PORT lets Heroku know what port they can attach to.

//env is environment 

app.use(express.static('public'));

app.listen(port, function(){
  console.log('listening on port: ', port);
}); //listen
