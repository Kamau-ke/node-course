const express=require('express')
const { people } = require('./data')
const app=express()
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.get('/api/people',(req, res)=>{
    res.status(200).json({success: true, data: people})
})

app.post('/api/people', (req, res)=>{
    let {name}=req.body

    if(!name){
        res.status(400).json({success:false, msg:'Please provide name'})
    }
    res.status(201).json({success:true, person:name})
})
app.post('/api/postman/people', (req,res)=>{
    const {message}=req.body;

    if(!message){
        res.status(400).json({success:false, msg:'please add message'})
    }

    res.status(200).json({success:true, message:message})
})

app.put('/api/people/:id', (req, res)=>{
    let {id}=req.params;
    let {name}=req.body;

    // find if id exists

    const person=people.find(person=>person.id==Number(id))

    if(!person){
        return res.status(404).json({success:false, msg:'Person id does not exist'})
    }

    // if person exist change and return new person

    let newPerson=people.map(person=>{
        if(person.id==Number(id)){
            person.name=name
        }

        return person

    })

    res.status(200).json({success:true, name:newPerson})


})


// Delete method

app.delete('/api/people/:id', (req, res)=>{
    const {id}=req.params;

    let person=people.find(person=>person.id===Number(id))

    

    if(!person){
        return res.status(404).json({success:false, msg:'No person with such id'})
    }

    const newPeople=people.filter(people=>{return people.id !=Number(id)})

    res.status(200).json({success:true, data:newPeople})
})

app.post('/login',(req,res)=>{
    let {name}=req.body

    if(name){
        res.status(200).send(`Welcome ${name}`)
    }
    else{
        res.status(401).send('Please provide credentials')
    }
    
})


app.listen(5000, ()=>{
    console.log('Server running on port 5000')
})