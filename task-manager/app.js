const express=require('express')
const app=express()

const tasks=require('./Routes/task')

app.use(express.json())
app.use('/api/v1/tasks', tasks)

const port=3000
app.listen(port, ()=>console.log(`Server running on port ${port}`))