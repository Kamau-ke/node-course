const express=require('express')
const app=express()

const { products }=require('./data')


app.get('/api/products/:productID', (req,res)=>{

    const {productID}=req.params;
    const singleProduct=products.find((product)=>product.id==Number(productID))
    if(!singleProduct){
        res.status(404).send('<h2>product does not exist</h2>')
    }else{
        res.status(200).json(singleProduct)
    }   
    
})

// multiple params
app.get('/api/products/:productID/reviews/:reviewID', (req,res)=>{
    console.log(req.params)
    res.send('hello world')
})

// Query params

app.get('/api/v1/query', (req,res)=>{
    // console.log(req.query);

    const {search, limit}=req.query

    let sortedProducts=[...products]

    if(search){
        sortedProducts=products.filter(product=>{
            return product.name.startsWith(search)
        })
    }

    if(limit){
        sortedProducts=products.slice(0, Number(limit))
    }

    if(sortedProducts.length <1){
        return res.status(200).json([{
            'success':true,
            'data':[]
        }])
    }

    res.status(200).json(sortedProducts)
        
    
    console.log(req.query)
    res.send('Hello world');

})



app.listen(5000, ()=>console.log('server running on port 5000...'))