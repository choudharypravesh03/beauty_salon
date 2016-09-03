var express = require('express');
var app = express();
var path = require('path');
var morgan = require('morgan')
var appPath = "dist";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, appPath)));
app.use(morgan('dev')); // log every requireequest to the console

app.get('/', function(req, res) {
    res.render('index.ejs', {user: "Great User", title:"homepage"})
});

app.get('/bridal', function(req, res) {
    res.render('pages/bridal.ejs', {user: "Great User", title: "bridalpage"})
})

app.get('/training', function(req, res) {
    res.render('pages/training.ejs', {user: "Great User", title: "bridalpage"})
})

app.listen(8080);
console.log("8080 is the magic port")