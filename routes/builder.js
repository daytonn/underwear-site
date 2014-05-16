var _ = require("underscore");
var glob = require("glob");
var express = require('express');
var router = express.Router();
var uFiles = glob.sync("node_modules/underwear/dist/**/*.js");
var files = {};

_(uFiles).chain().reject(function(file) {
  return file.match(/min/) || file.match(/standalone/);
}).map(function(file) {
  return file.replace(/node_modules\/underwear\/dist\//, '');
}).reject(function(file) {
  return !file.match(/\//);
}).each(function(file) {
  var parts = file.split("/");
  var component = parts[0];
  var fileName = parts[1].replace(/\.js$/, '');
  if (files[component]) {
    files[component].push(fileName);
  } else {
    files[component] = [fileName];
  }
});

router.get('/', function(req, res) {
  res.render('builder', { components: files });
});

module.exports = router;
