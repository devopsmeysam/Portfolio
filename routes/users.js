/* Filename: users.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Thursday, October 13th, 2022 */

var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');
var authController = require('../controllers/auth');

/* GET users listing. */



//Showing the user's Profile

router.get('/me', authController.requireAuth, userController.myProfile);

//Sign-up the users

router.post('/signup', userController.signup);

//Sign-in the users

router.post('/signin', userController.signin);

//Sign-out the users


module.exports = router;
