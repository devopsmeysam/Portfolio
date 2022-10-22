/* Filename: inventory.router.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Thursday, October 18th, 2022 */

var express = require('express');
var router = express.Router();
let inventoryController = require('../controllers/inventory.controller');


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
router.get('/edit/:id', requireAuth, inventoryController.displayEditPage);
router.post('/edit/:id', requireAuth, inventoryController.processEditPage);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, inventoryController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, inventoryController.processAddPage);


// Route for Delete
router.get('/delete/:id', requireAuth, inventoryController.performDelete);

module.exports = router;
