var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/public/" + "demoPage.html" );
});

app.get('/new', function (req, res) {
  res.send('hello this is response');
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
