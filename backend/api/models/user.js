
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://meanblog:mean123@atlascluster.6rgbr3d.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true});
var conn =mongoose.Collection;

var userSchema =new mongoose.Schema({
  name: String,
  email: String,
  password: String,

});

var userModel = mongoose.model('Users', userSchema);
module.exports=userModel;


// username:rayhan57
// password: rayhan@123
//database
// username:meanblog
// password: mean123