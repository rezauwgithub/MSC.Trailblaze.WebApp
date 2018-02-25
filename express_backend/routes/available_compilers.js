var express = require('express');
var router = express.Router();
var util = require('../utils/util');

const {USE_FAKE_COMPILER_DATA} = require('../backend_settings');


/* GET MSC-COMPILERS NAME. */
module.exports = router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


  if (USE_FAKE_COMPILER_DATA) {
    res.json([{
      id: 1,
      value: "compiler93821",
      label: "COMPILER93821",
    }, {
      id: 2,
      value: "compiler93822",
      label: "COMPILER93822"
    }]);


  } else {
    util.queryCompilerNames(function(msc_compilers) {
      res.json(msc_compilers);
    });

  }
});
