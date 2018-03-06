const router = require('express').Router();
const util = require('../util');


/* GET COMPILERS */
module.exports = router.get('/', (req, res, next) => {

  res.json(
    [{
      value: 0,
      name: "COMPILER9999",
    }, {
      value: 1,
      name: "COMPILER2222"
    }]);

})