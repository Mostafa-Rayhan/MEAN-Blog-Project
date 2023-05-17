
var express = require('express');
var userModel = require('../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  var userDetails = new userModel({
    name: 'Rayhan',
    email: 'rayhan@gmail.com',
    password: 'rayhan@123',
    
  });

  userDetails.save(function(err,req1){
    if(err) throw err;
   
    res.render('index', { title: 'User Data Inserted' });
       
  })

  
});


router.post('/register', function(req, res, next) {

  var userDetails = new userModel({
    name: req.body.Name,
    email: req.body.Email,
    password: req.body.Password,
    
  });

  userDetails.save().then(doc=>{
    res.status(201).json({
        message:"Inserted Successfully",
        results:doc
    });
})
.catch(err=>{
    res.json(err);
});

  
});

module.exports = router;

