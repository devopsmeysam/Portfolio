/* Filename: list.router.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Thursday, October 18th, 2022 */

var express = require('express');
var router = express.Router();
let inventoryController = require('../controllers/list.controller');

/* GET users listing. */
router.get('/list', inventoryController.inventoryList);


// Routers for edit
router.get('/edit/:id', inventoryController.displayEditPage);
router.post('/edit/:id', inventoryController.processEditPage);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', inventoryController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', inventoryController.processAddPage);


// Route for Delete
router.get('/delete/:id', inventoryController.performDelete);

module.exports = router;
