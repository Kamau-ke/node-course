const express=require('express')
const route=express.Router()

route.post('/',(req,res)=>{
    let {name}=req.body

    if(name){
       return res.status(200).send(`Welcome ${name}`)
    }
    else{
       return res.status(401).send('Please provide credentials')
    }
    
})

module.exports=route