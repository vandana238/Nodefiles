// const mongoose = require ('mongoose')

// const clarity = mongoose.Schema({
    const mongoose = require ('mongoose')

    const imp = mongoose.Schema({
    brandname : {
    type : String,
    },
    data : {
    type : Date,
    default : Date.now
    },
    cost:{
                type:Number,
                required:true
            },
            color:{
                type:String,
                required:true
            },
            avaliability:{
                type:Number,
                required:true
            },
            quantity:{
                type:Number,
                required:true
                }
    
    })
    module.exports = mongoose.model('imp',clarity)


// //we use module.exports  to export schema