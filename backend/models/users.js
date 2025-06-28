const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    creditBalance:{
        type:Number,
        default:5
    }
},{timestamps:true})

const User = mongoose.models.user || mongoose.model('user' , UserSchema);
module.exports = User