/* Filename: list.model.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Thursday, October 18th, 2022 */

let mongoose = require('mongoose');

//Creates a model class:

let inventoryModel = mongoose.Schema(
    {
        item: String,
        qty: Number,
        tags: [],
        status: String,
        size: {
            h: Number,
            w: Number,
            uom: String
        }
    }, {
        collection: "inventory"
    });

    module.exports = mongoose.model('List', inventoryModel);