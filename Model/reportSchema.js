//import mongoose
const mongoose = require('mongoose')

//create report schema
const reportSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    location:{
        type:String,
        required:true
    },
    file:{
        type:String,
        required:false
    },
    date:{
        type: Date,
        default: Date.now,
    }
})

const report = mongoose.model('report', reportSchema)

module.exports = report

