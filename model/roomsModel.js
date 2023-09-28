const mongoose = require('mongoose')
const roomsShema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    description:{
        type:String,
        required:true
    },
    capacity:{
        type: Number,
        required: true,
        min:1
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    booked: {
        type: Boolean,
        default: false
    },
   
},{
    timestamps: true
})
roomsShema.pre('save', async(next)=>{
    if(!this.name){
    let count = await this.constructor.countDocument
    this.name = `Room ${count+1}`
    }
    next()
})

module.exports = mongoose.model('rooms', roomsShema)