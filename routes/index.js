var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page', name: 'Meysam' });
});

/* GET About me page. */
router.get('/about', function(req, res, next) {
  res.render('index', 
  { 
    title: 'About Me',
    name: 'Meysam'
  });
});

/* GET Contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('index', 
  { 
    title: 'Contact Me',
    name: 'Meysam'
  });
});

/* GET My Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', 
  { 
    title: 'My Projects',
    name: 'Meysam'
  });
});

/* GET My Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', 
  { 
    title: 'My Services',
    name: 'Meysam'
  });
});

module.exports = router;
