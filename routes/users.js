/* Filename: users.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Thursday, October 13th, 2022 */

var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Sign-up the users
router.get('/signup', userController.renderSignup);
router.post('/signup', userController.signup);

//Sign-in the users
router.get('/signin', userController.renderSignin);
router.post('/signin', userController.signin);

//Sign-out the users
router.get('/signout', userController.signout);

module.exports = router;
