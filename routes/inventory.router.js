/* Filename: inventory.router.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Thursday, October 18th, 2022
Edited: Tuesday, December 20th, 2022 */

var express = require('express');
var router = express.Router();
let inventoryController = require('../controllers/inventory.controller');
// let passport = require('passport');
let authController = require('../controllers/auth');

// complementary function for security purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}

/* GET users listing. */
router.get('/list', inventoryController.inventoryList);


// Routers for edit
// router.put('/edit/:id', inventoryController.processEdit);
router.put('/edit/:id', authController.requireAuth, authController.isAllowed, inventoryController.processEdit);
// router.put('/edit/:id', passport.authenticate('tokencheck', { session: false }), inventoryController.processEdit);




/* POST Route for processing the Add page - CREATE Operation */
// router.post('/add', inventoryController.processAdd);
router.post('/add', authController.requireAuth, inventoryController.processAdd);
// router.post('/add', passport.authenticate('tokencheck', { session: false }), inventoryController.processAdd);

// Route for Delete
// router.delete('/delete/:id', inventoryController.performDelete);
router.delete('/delete/:id', authController.requireAuth, authController.isAllowed, inventoryController.performDelete);
// router.delete('/delete/:id', passport.authenticate('tokencheck', { session: false }), inventoryController.performDelete);

module.exports = router;
