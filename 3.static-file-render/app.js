// importing modules
const express = require("express");
const path = require('path');

// app is a instance of express 
// to run express on top of nodejs need to run app instance 
const app = express();

// to use middleware app.use
// express built-in middleware for static dir files to server
// from assets we serve app.css
app.use(express.static('assets'));

// for mutiple static dir
// from file we serve index.html
app.use(express.static('files'));

// to create path prefix virtual dir
// from virtual we serve images
app.use('/virtual', express.static(path.join(__dirname, 'images')));


// basic http get request on '/' 
app.get('/', function(req, res) {
    res.send("Hello World!");
});

// server port listen on 3000
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});