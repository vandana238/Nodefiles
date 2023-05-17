const mongoose = require ('mongoose')

const clarity = mongoose.Schema({
        brandname : {
             type : String,
             required:true },
        cost:{
            type:Number,
            required:true
        },
        color:{
            type:Array,
            required:true
        },
        avaliability:{
            type:Array,
            required:true
        },
        quantity:{
            type:Number,
            required:true
            }

})
// clarity schema
//model file name
//brandname collection name
module.exports = mongoose.model('brandname',clarity)


//we use module.exports  to export schema