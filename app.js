var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs");

app.get('/', function(req, res){
    res.render('home');
});
app.get('/home/calendar', function(req, res){
    res.render('calendar');
});
app.get('/home/homework', function(req, res){
    res.render('homework');
});
app.get('/home/current', function(req, res){
    res.render('current');
});
app.get('/home/students', function(req, res){
    res.render('students');
});
app.get('/home/classDojo', function(req, res){
    res.render('classDojo');
});


app.listen(port, function() {
    console.log("welcome to the site!");
});