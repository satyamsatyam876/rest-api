const express=require('express')
const router=express.Router();
const mongoose=require('mongoose')
const Developer=require('../models/developer')


//get all the developers
router.get('/:id', async(req,res)=>{
    try{
        const allDeveloper= await Developer.find();
        res.status(200).json(allDeveloper)
    }
    catch (err){
        res.status(400).json({'message':"error"})
    }
})

//get one developer
router.get('/one',async(req,res)=>{
    try{
  const singleDeveloper=await Developer.findById(req.params.id)
  res.status(200).json(singleDeveloper)
    }
    catch(err){
        res.status(400).json({'message':"error"})
    }
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

router.patch("/update/:id", async(req,res)=>{
try{
const{id:_id}= await req.params;
const changes=await req.body
const updatedDeveloper=await Developer.findByIdAndUpdate(_id,{...changes,_id})
res.status(200).json({message:"Sucess"})

}
catch(err){
    res.status(400).json({message:"Error"}) 
 }

})



//delete a developer


module.exports=router