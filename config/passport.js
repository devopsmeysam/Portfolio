/* Filename: passport.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Thursday, October 18th, 2022 */

const passport = require('passport');
const user = require('../models/user');

module.exports = function() {
    
    const User = require('../models/user');
    
    //When a user is authenticated, Passport saves
    //their _id property to the session.
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    //Then, when the user object is needed, Passport uses
    //the _id property to get the user object from the database.
    passport.deserializeUser((id, done) => {
        User.findOne({_id: id}, '-password -salt', (err, user) => {done(err, user);});
    });

    require('./local')();
}