const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    jobTitle:{type:String,required:true},
    salary:{type:String,required:true},
    location:{type:String,required:true},
    jobType:{type:String,required:true},
    experience:{type:String,required:true},
    field:{type:String,required:true},
    description:{type:String,required:true},
})

module.exports = mongoose.model('Post',postSchema)