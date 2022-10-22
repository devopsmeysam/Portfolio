/* Filename: db.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Thursday, October 18th, 2022 */

//I will need to take care of my DB access password in the following weeks.

let atlasDB = "mongodb+srv://meysamdbuser:gwqUiKclkg2K4utn@cluster005.ye5t026.mongodb.net/products";

let mongoose = require('mongoose');

module.exports = function(){
    //Connects to my DataBase:
    mongoose.connect(atlasDB);

    let mongoDB = mongoose.connection;
    mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
    mongoDB.once('open', ()=>{
        console.log("==== Connected to MongoDB Successfully ====");
    });

    return mongoDB;
}