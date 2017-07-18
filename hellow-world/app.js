// importing modules
const express = require("express");
const app = express();

// basic http get request on '/' 
app.get('/', (req, res) => {
    res.send("Hello World!");
});

// server port listen on 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});