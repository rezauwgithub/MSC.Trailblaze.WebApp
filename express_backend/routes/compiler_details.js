var express = require('express');
var router = express.Router();
var util = require('../utility');

const {USE_FAKE_COMPILER_DATA} = require('../backend_settings');


/* GET COMPILER DETAILS. */
module.exports = router.all('/', function(req, res, next) {
  // res.send('respond with a resource');

  if (USE_FAKE_COMPILER_DATA) {
    res.json([{
      name: "COMPILER93828",
      user_guide: "/home/somewhere/inside/thatfolder/file.pdf",
      customer: "NitroServices.net",
      process: "Not sure what process they want",
      compiler: "COMPILER93828v3",
      base_file_verision: "COMPILER93828v3",
    }]);

  } else {
    util.queryCompilerDetails(req.body.selectedCompiler, function(compiler_details) {
      res.json(compiler_details);
    });

  }
});
