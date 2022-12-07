/* Filename: index.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Thursday, October 13th, 2022 */

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index.controller');


/* GET home page. */
router.get('/', indexController.home);

/* GET About me page. */


/* GET Contact me page. */


/* GET My Projects page. */


/* GET My Services page. */


/* GET Business Contact List page. */


/* GET TEMPORARY List page. */


module.exports = router;
