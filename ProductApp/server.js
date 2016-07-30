//To use the exported script.
// var hello = require('./hello');
// hello.sayHello();
// hello();

var path = require('path');
var mongoose = require('mongoose');
var express = require('express');
var app = express();
app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/productdb');
var product = new mongoose.Schema({
  id : Number,
  name : String,
  category : String,
  price : Number
},{
  collection : 'product'  //Specify collection name, otherwise mongoose will append
                          //'s' to the end of the model while creation.
},{
  versionKey: false       //if set to true, mongoose will add '__v' key to control version.
});

var productModel = mongoose.model('product',product);

app.get('/',function(req,res){
  res.sendFile('./index.html');
});

app.get('/products',function(req,res){
  productModel.find(function(err,products){
    if(err) return console.log("error",err);
    console.log("products",products);
    res.send(products);
  });
});

app.post('/addProduct',function(req,res){
  console.log("req.body",req.body);
  var parsedPdt = (req.body);
  var pdtData = {
    id: parsedPdt.id,
    name: parsedPdt.name,
    category: parsedPdt.category,
    price: parsedPdt.price
  };
  console.log("in post",pdtData);
  var newPdt = new productModel(pdtData);
  newPdt.save( function(error, data){
    if(error){
        res.json(error);
    }
    else{
        res.json(data);
    }
  });
});

app.put('/editProduct/:id',function(req,res){ //editProduct?name=aditya
  console.log("put hit", req.params.id);
});

 var server = app.listen(55000, function(){
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port);
 });
