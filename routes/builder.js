var express = require('express');
var fs = require('fs');
var router = express.Router();
var underwearFiles = fs.readSync("node_modules/underwear/dist")

router.get('/', function(req, res) {
  res.render('builder');
});

module.exports = router;
