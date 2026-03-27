const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    age:Number,
    email:{
        type:String,
        unique:false
    },
    password:String
})

module.exports = mongoose.model("User" , userSchema)