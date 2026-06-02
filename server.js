// Importing express package
const express = require('express')

//express app

const app = express()

//routes
app.get('/',(req,res)=>{
    res.json({msg:'Wecome to our app'})
})

//port no
const PORT = 4000;

//LISTE for request

app.listen(PORT,()=>{
    console.log(`Server is up and listening : http://localhost:${PORT}`);
    
})