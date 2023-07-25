const mongoose=require('mongoose')


const  developerSchema=new mongoose.Schema({
name:{
    type:String,

},
email: {
    type:String,
    unique:true,
    required:true

},
password: {
    type:String,
    required: true
},
technology:{
    type:String,
    required:true

},
employed:{
    type:Boolean,
    default:false
}

},{timestamps:true})

module.exports=mongoose.model('Developer',developerSchema)