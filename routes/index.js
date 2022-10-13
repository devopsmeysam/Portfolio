/* Filename: index.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Thursday, October 13th, 2022 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home Page', name: 'Portfolio' });
});

/* GET About me page. */
router.get('/about', function(req, res, next) {
  res.render('aboutMe', 
  { 
    title: 'About Me',
    name: 'Meysam'
  });
});

/* GET Contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contactMe', 
  { 
    title: 'Contact Me',
    name: 'Meysam'
  });
});

/* GET My Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('myProjects', 
  { 
    title: 'My Projects',
    name: 'Meysam'
  });
});

/* GET My Services page. */
router.get('/services', function(req, res, next) {
  res.render('myServices', 
  { 
    title: 'My Services',
    name: 'Meysam'
  });
});

module.exports = router;
