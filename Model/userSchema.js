//import mongoose
const mongoose=require('mongoose')

//create admin schema
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const user=mongoose.model('users',userSchema)

module.exports=user

