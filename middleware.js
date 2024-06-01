const express=require('express')
const logger=require('./logger')
const app=express()

// req=>middleware=>res

//Use method passes logger to every function underneath it
app.use(logger)

// Here we pass logger as callback function
// app.get('/',logger, (req, res)=>{
//     res.send('Homepage')
// })


// Here we pass logger to every funtion that start with '/api' in url
// app.use('/api', logger)

// app.get('/api/items', (req, res)=>{
//     res.send('items')
// })

app.get('/', (req, res)=>{
    res.send('Homepage')
})

app.get('/about', (req,res)=>{
    res.send('About page')
})

app.listen(5000, ()=>{
    console.log('server running on port 5000')
})