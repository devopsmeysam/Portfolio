exports.home = function(req, res, next) {
    res.render('home', { title: 'Home Page', name: 'Portfolio' });
}

exports.about = function(req, res, next) {
    res.render('aboutMe', 
    { 
      title: 'About Me',
      name: 'Meysam'
    });
}

exports.contact = function(req, res, next) {
    res.render('contactMe', 
    { 
      title: 'Contact Me',
      name: 'Meysam'
    });
}

exports.projects = function(req, res, next) {
    res.render('myProjects', 
    { 
      title: 'My Projects',
      name: 'Meysam'
    });
}

exports.services = function(req, res, next) {
    res.render('myServices', 
    { 
      title: 'My Services',
      name: 'Meysam'
    });
}

exports.business = function(req, res, next) {
    res.render('businessConList', 
    { 
      title: 'Business Contact List',
      name: 'Meysam'
    });
}

//TEMPORARY
exports.list = function(req, res, next) {
  res.render('list', 
  { 
    title: 'Business Contact List',
    name: 'Meysam'
  });
}