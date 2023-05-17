// const mongoose = require ('mongoose')

// const customerdata = mongoose.Schema({
//         UserName : {
//              type : String,
//              required:true 
//             }
//         // Number:{
//         //     type:Number,
//         //     required:true
//         // }

// })

// module.exports = mongoose.model('mainmethod',customerdata)










var mongoose = require('mongoose');
const UserSchema=mongoose.Schema( {
username:{
type:String
},
email:{
type: String
},

password:{
type:String

}

})
module.exports=mongoose.model('user',UserSchema);
