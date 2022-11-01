var express = require('express');
var router = express.Router();

const messages = [ 
  { 
    text: "Hi there!", 
    user: "Amit Kumar", 
    added: new Date() 
  }, 
  { 
    text: "Hello World!", 
    user: "Nitish", 
    added: new Date() 
  } 
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board',messages });
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
 let data = req.body;
 Object.assign(data,{added: new Date()});
 messages.push(data);
 res.redirect('/') 
});


module.exports = router;
