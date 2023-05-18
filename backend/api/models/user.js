
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://meanblog:mean123@atlascluster.6rgbr3d.mongodb.net/meanDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
var conn =mongoose.Collection;


var userSchema =new mongoose.Schema({

  name: {
    type:String, 
    required: true 
  },
  email:  {
    type:String, 
    required: true,
    index: {
      unique: true, 
    },
    match:/[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

  },
  password:  {
    type:String, 
    required: true
  },
  date:{
    type: Date, 
    default: Date.now 
  }
});


var userModel = mongoose.model('Users', userSchema);
module.exports=userModel;


// username:rayhan57
// password: rayhan@123
//database
// username:meanblog
// password: mean123