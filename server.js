// Importing express package
const express = require('express')
const dotenv = require('dotenv')

const workoutRoutes = require('./routes/workout')
dotenv.config()
//express app

const app = express()

//middleware
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
    
})

app.use('/api/workouts/',workoutRoutes)

//routes
app.get('/',(req,res)=>{
    res.json({msg:'Wecome to our app'})
})

//port no
const PORT = process.env.PORT;

//LISTE for request

app.listen(PORT,()=>{
    console.log(`Server is up and listening : http://localhost:${PORT}`);
    
})