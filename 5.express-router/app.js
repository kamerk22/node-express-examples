// importing modules
const express = require("express");
const route = require("./route");

// app is a instance of express 
// to run express on top of nodejs need to run app instance 
const app = express();


// load homeRoute module
app.use(route);


// server port listen on 3000
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});