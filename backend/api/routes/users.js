
var express = require('express');
var userModel = require('../models/user');
var router = express.Router();

/* GET users listing. */


function checkEmail(req,res,next){
  var email=req.body.Email;
  var checkexitemail=userModel.findOne({email:email});
  checkexitemail.exec((err,data)=>{
 if(err) throw err;
 if(data){
  return res.status(200).json({
    msg:"Email Already Exits",
    results:data
});
 }
 next();
  });
}


// router.get('/', function(req, res, next) {

  // var userDetails = new userModel({
  //   name: 'Rayhan',
  //   email: 'rayhan@gmail.com',
  //   password: 'rayhan@123',
 
    
  // });

  // userDetails.save(function(err,req1){
  //   if(err) throw err;
   
  //   res.render('index', { title: 'User Data Inserted' });
       
  // })

  
// });

router.get('/', function(req, res, next) {

  res.render('index', { title: 'User Data Inserted' });
  
});

router.post('/register', checkEmail, function(req, res, next) {

  var userDetails = new userModel({
    name: req.body.Name,
    email: req.body.Email,
    password: req.body.Password,
    
  });

  userDetails.save().then(resResult=>{
    res.status(201).json({
        msg:"Inserted Successfully",
        results:resResult
    });
})
.catch(err=>{
    res.json(err);
});

  
});

module.exports = router;

