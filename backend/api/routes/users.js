
var express = require('express');
var userModel = require('../models/user');
var router = express.Router();

const bcrypt = require('bcrypt');


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



router.post('/register', checkEmail,function(req, res, next) {
 
  bcrypt.hash(req.body.Password, 10, function(err, hash) {
 
    if(err){
      res.status(400).json({
        msg:"Something Wrong, Try Later!",
        results:err
      });
    }else{
      var userDetails = new userModel({
        name: req.body.Name,
        email: req.body.Email,
        password: hash,
          
      });
 
      userDetails.save().then(resResult=>{
        res.status(201).json({
            msg:"User Created Successfully",
            results:resResult
        });


    })
    .catch(err=>{
      res.json(err);
    });
    }
  });
});


// router.post('/register', checkEmail, function(req, res, next) {

//   var userDetails = new userModel({
//     name: req.body.Name,
//     email: req.body.Email,
//     password: req.body.Password,
    
//   });

//   userDetails.save().then(resResult=>{
//     res.status(201).json({
//         msg:"Inserted Successfully",
//         results:resResult
//     });
// })
// .catch(err=>{
//     res.json(err);
// });

  
// });



router.post("/login",function(req,res,next){

  var email=req.body.Email;
  userModel.find({email:email})
  .exec()
  .then(user=>{
      if(user.length<1){
          res.status(200).json({
            msg:"Auth Failed",
            UserData:'',
            status:'error'
          });
      }else{
          bcrypt.compare(req.body.Password, user[0].password, function(err, result) {
             if(err){
              res.json({
                msg:"Auth Failed",
                UserData:'',
                status:'error'
              });
             }
             if(result){
              res.status(200).json({
                msg:"User Login Successfully",
                  UserData:user,
                  status:'success'
              });
             }else{
              res.json({
                msg:"Auth Failed",
                UserData:'',
                status:'error'
              });
             }
          });
      
  }
  })
  .catch(err=>{
      res.json({
          error:err
      });
  })


  });


module.exports = router;

