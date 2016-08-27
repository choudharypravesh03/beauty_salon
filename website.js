var express = require('express');
var app = express();
var path = require('path');

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index', {user: "Great User", title:"homepage"})
});

app.get('/bridal', function(req, res) {
    res.render('pages/bridal.ejs', {user: "Great User", title: "bridalpage"})
})

app.get('/training', function(req, res) {
    res.render('pages/training.ejs', {user: "Great User", title: "bridalpage"})
})

app.listen(8080);
console.log("8080 is the magic port")