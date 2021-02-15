/*
file name : index.js
Surya Teja Santhosh kandru
student ID: 301109137
date: 14-02-2021
*/

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', mainHeading: 'MainHeading'});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('aboutme', { title: 'About' });
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('project', { title: 'Projects' });
});
/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
/* GET Contacts page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
