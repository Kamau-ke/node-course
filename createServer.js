const express=require('express')
const app=express();

app.get('/',(req,res)=>{
    res.status(200).send('This is home page')
})


app.get('/about',(req,res)=>{
    res.status(200).send('This is about page')
})


app.all('*', (req,res)=>{
        res.status(404).send('<h1>Resource not found</h1>')
})


app.listen(5000, ()=>console.log('server started'))