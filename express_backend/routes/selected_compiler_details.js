var express = require('express');
var router = express.Router();
var util = require('../util');

const { USE_FAKE_COMPILER_DATA } = require('../_backend_settings');


/* GET COMPILER DETAILS. */
module.exports = router.all('/', function(req, res, next) {
  // res.send('respond with a resource');

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


  if (USE_FAKE_COMPILER_DATA) {

    res.json({
      value: req.body.value,
      name: "COMPILER93828",
      user_guide: "/home/somewhere/inside/thatfolder/file.pdf",
      customer: "NitroServices.net",
      process: "Not sure what process they want",
      compiler: "COMPILER93828v3",
      base_file_verision: "COMPILER93828v3",
    });

  } else {

    util.querySelectedCompilerDetails(req.body, (selectedCompilerDetails) => {
      res.json(selectedCompilersDetails);
    });

  }
});
