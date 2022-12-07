/* Filename: users.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Thursday, October 13th, 2022 */

var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

/* GET users listing. */



//Sign-up the users

router.post('/signup', userController.signup);

//Sign-in the users

router.post('/signin', userController.signin);

//Sign-out the users


module.exports = router;
