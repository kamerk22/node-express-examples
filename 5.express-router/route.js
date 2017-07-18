const express = require("express");

// express router module
// all routing can be done with express-router also
const router = express.Router();

// middleware for this routes to log date
router.use(function timeLog (req, res, next) {
  console.log("Time: ", Date());
  next();
});

// define the home page route
router.get('/', function (req, res) {
  res.send("User home page");
});

// define the about route
router.get('/about', function (req, res) {
  res.send("About User");
})

module.exports = router;