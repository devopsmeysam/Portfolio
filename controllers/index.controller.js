/* Filename: index.controller.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Thursday, October 18th, 2022 */

exports.home = function(req, res, next) {
    
    res.status(200).json(
      {
        success: true,
        message: "This is the Home endpoint."
      }
    );
}











//TEMPORARY
