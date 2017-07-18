// importing modules
const express = require("express");

// app is a instance of express 
// to run express on top of nodejs need to run app instance 
const app = express();

// basic http request start // 
app.get('/get', function(req, res) {
    res.send("Hello World!");
});

app.post('/post', function(req, res) {
    res.send("Catch POST Request");
});

app.put('/put', function(req, res) {
    res.send("Catch PUT Request");
});

app.delete('/delete', function(req, res) {
    res.send("Catch DELETE Request");
});
// basic http request end //

// server port listen on 3000
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});