var express = require('express');
var router = express.Router();
var util = require('../util');

// const { USE_FAKE_COMPILER_DATA } = require('../_backend_settings');


/* GET MSC-COMPILERS NAME. */
module.exports = router.get('/', function(req, res, next) {
  // res.send('respond with a resource');


  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


  if (false) {
    res.json([{
      value: 0,
      name: "COMPILER93821",
    }, {
      value: 1,
      name: "COMPILER93822"
    }]);


  } else {
  
    util.getAvailableCompilers(function(availableCompilers) {
      res.json(availableCompilers);
    });

  }
});
