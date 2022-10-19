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
router.get('/about', indexController.about);

/* GET Contact me page. */
router.get('/contact', indexController.contact);

/* GET My Projects page. */
router.get('/projects', indexController.projects);

/* GET My Services page. */
router.get('/services', indexController.services);

/* GET Business Contact List page. */
router.get('/business', indexController.business);

/* GET TEMPORARY List page. */
router.get('/list', indexController.list);

module.exports = router;
