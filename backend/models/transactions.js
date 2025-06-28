const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    plan:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    credits:{
        type:Number,
        required:true
    },
    isPaid:{
        type:Boolean,
        default:false,
        required:true
    },
    date:{
        type:Number,
        required:true 
    },
    
})

const Transaction = mongoose.models.transaction || mongoose.model('transaction',transactionSchema);
module.exports = Transaction;