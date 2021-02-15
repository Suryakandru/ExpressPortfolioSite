/*
file name : users.js
Surya Teja Santhosh kandru
student ID: 301109137
date: 14-02-2021
*/

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
