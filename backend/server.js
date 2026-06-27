// Importing express package
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require("cors");

//Routes
const workoutRoutes = require('./routes/workout')
const userRoutes = require('./routes/user')


dotenv.config()



//express app
const app = express()

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
    
})
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use('/api/workouts/',workoutRoutes)
app.use('/api/user',userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI).then(()=>{
    //LISTE for request

app.listen(PORT,()=>{
    console.log(`Server is up and listening : http://localhost:${PORT} & connected to db`);
    
})
})
.catch((error)=>{console.log(error);
})

//routes
app.get('/',(req,res)=>{
    res.json({msg:'Wecome to our app'})
})

//port no
const PORT = process.env.PORT || 4000;

