var express = require('express');
var router = express.Router();
var util = require('../util');

const { USE_FAKE_COMPILER_DATA } = require('../_backend_settings');


/* GET COMPILER DETAILS. */
module.exports = router.all('/', function(req, res, next) {
  // res.send('respond with a resource');

  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  while (req.body.name === undefined) {
    console.log("WTF Eduard?");
  }


  console.log("WTF? " + req.body.name);
  console.log("Jesus! " + req.body.name);

});
