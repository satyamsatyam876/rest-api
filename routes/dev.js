const express=require('express')
const router=express.Router();
const mongoose=require('mongoose')
const Developer=require('../models/developer')


//get all the developers

router.get('/',(req,res)=>{
    res.send("API is working")
})

//post/create a developer

router.post('/create',async(req,res)=>{
try{
const newDeveloper=await Developer.create(req.body)
res.status(201).json({message:"Sucess"})
newDeveloper.save();

}
catch(err){
   res.status(400).json({message:"Error"}) 
}
})

// put/patch update a developer





//delete a developer


module.exports=router