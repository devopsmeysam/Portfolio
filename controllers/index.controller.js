/* Filename: index.controller.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Thursday, October 18th, 2022 */

exports.home = function(req, res, next) {
    res.render('home', { title: 'Home Page', name: 'Portfolio', userName: req.user ? req.user.username: '' });
}

exports.about = function(req, res, next) {
    res.render('aboutMe', 
    { 
      title: 'About Me',
      name: 'Meysam',
      userName: req.user ? req.user.username: ''
    });
}

exports.contact = function(req, res, next) {
    res.render('contactMe', 
    { 
      title: 'Contact Me',
      name: 'Meysam',
      userName: req.user ? req.user.username: ''
    });
}

exports.projects = function(req, res, next) {
    res.render('myProjects', 
    { 
      title: 'My Projects',
      name: 'Meysam',
      userName: req.user ? req.user.username: ''
    });
}

exports.services = function(req, res, next) {
    res.render('myServices', 
    { 
      title: 'My Services',
      name: 'Meysam',
      userName: req.user ? req.user.username: ''
    });
}

exports.business = function(req, res, next) {
    res.render('businessConList', 
    { 
      title: 'Business Contact List',
      name: 'Meysam',
      userName: req.user ? req.user.username: ''
    });
}

//TEMPORARY
exports.list = function(req, res, next) {
  res.render('list', 
  { 
    title: 'Business Contact List',
    name: 'Meysam',
    userName: req.user ? req.user.username: ''
  });
}