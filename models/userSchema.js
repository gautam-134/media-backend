const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required: true,
    },
    phone:{
        type:String,
        unique:true,
        required: true,
    },
    email:{
        type:String,
        unique:true,
        required: true,
    },
    username:{
        type:String,
        trim:true,
        unique: true,
    },
    password:{
        type:String,
        required: true,
        unique: true
    }
});

const user = new mongoose.model('user', userSchema);
module.exports=user;