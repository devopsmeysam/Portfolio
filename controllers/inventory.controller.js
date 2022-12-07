/* Filename: inventory.controller.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Thursday, October 18th, 2022 */

let Inventory = require('../models/inventory.model');

function getErrorMessage(err) {
    if (err.errors) {
        for (let errName in errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    }
    if (err.message) {
        return err.message;
    } else {
        return 'Unknown server error';
    }
}

exports.inventoryList = function(req, res, next){
    Inventory.find((err, inventoryList) =>{
        if(err){
            console.error(err);

            res.status(400).json(
                {
                  success: false,
                  message: getErrorMessage(err)
                }
            );

        } else{
            // res.render('inventory/list', {
            //     title: 'Business Contact List',
            //     InventoryList: inventoryList,
            //     userName: req.user ? req.user.username: ''
            // })
            res.status(200).json(inventoryList);
        }
    }).sort('item');
}





module.exports.processEdit = (req, res, next) => {
    let id = req.params.id

    let updatedItem = Inventory({
        _id: id,
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
        size : {
            h: req.body.size.h,
            w: req.body.size.w,
            uom: req.body.size.uom,
        },
        tags: req.body.tags.split(",").map(word => word.trim())
    });

    // console.log(updatedItem);

    Inventory.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            // res.end(err);
            res.status(400).json(
                {
                  success: false,
                  message: getErrorMessage(err)
                }
            );
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            // res.redirect('/inventory/list');
            res.status(200).json(
                {
                  success: true,
                  message: "Item updated successfully."
                }
            );
        }
    });
}




module.exports.processAdd = (req, res, next) => {
    let newItem = Inventory({
        _id: req.body.id,
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
        size : {
            h: req.body.size.h,
            w: req.body.size.w,
            uom: req.body.size.uom,
        },
        tags: req.body.tags.split(",").map(word => word.trim())
    });

    Inventory.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            // res.end(err);
            res.status(400).json(
                {
                  success: false,
                  message: getErrorMessage(err)
                }
            );
        }
        else
        {
            // refresh the book list
            console.log(item);
            // res.redirect('/inventory/list');
            res.status(200).json(
                {
                  success: true,
                  message: "Item added successfully."
                }
            );
        }
    });

}



module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Inventory.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            // res.end(err);
            res.status(400).json(
                {
                  success: false,
                  message: getErrorMessage(err)
                }
            );
        }
        else
        {
            // refresh the book list
            // res.redirect('/inventory/list');
            res.status(200).json(
                {
                  success: true,
                  message: "Item deleted successfully."
                }
            );
        }
    });
}