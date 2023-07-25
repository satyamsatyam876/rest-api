// require the express
const express=require('express')
const port =5000;
const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/devDictionary",{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
console.log("MongoDb is connected")
}).catch((err)=>{
console.log(err)
})
const app=express();

app.listen(port,(err)=>{
    if(err){
        console.log(`Error in connection`)
    }
    else{
        console.log(`Server is connected to ${port}`)
    }
})