// importing modules
const express = require("express");

// app is a instance of express 
// to run express on top of nodejs need to run app instance 
const app = express();

// basic GET request
app.get('/', function(req, res) {
    res.send("GET Request");
});

// will match /xyz path
app.get('/xyz', function(req, res) {
    res.send("GET Request on /xyz");
});

// will match /xyz.txt eg: .tar .html .exe
app.get('/xyz.txt', function(req, res) {
    res.send("GET Request on /xyz.txt");
});

// will match pattrn eg: acd, abcd
app.get('/ab?cd', function (req, res) {
  res.send("String Pattrn: ab?cd");
});

// will match pattrn eg: abbcd, abcd, abbbcd
app.get('/ab+cd', function (req, res) {
  res.send("String Pattrn: ab+cd");
});

// will match pattrn eg: abbcd, abcd, abbbcd
app.get('/ab+cd', function (req, res) {
  res.send("String Pattrn: ab+cd");
});

// will match eg: hat, cat, rat
app.get(/.*at$/, function (req, res) {
  res.send("Pattrn : /.*at/");
});

// will match 
// http://localhost:3000/users/kamerk22/age/21
// req will provide all get request params
app.get('/users/:username/age/:age', function (req, res) {
    res.send(req.params);
});

// chain routing
app.route('/chain')
.get(function(req, res) {
    res.send("GET Request from Chain Route");
})
.post(function(req, res) {
      res.send("POST Request from Chain Route")
});


// server port listen on 3000
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});