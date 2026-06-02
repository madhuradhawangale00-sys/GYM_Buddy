// Importing express package
const express = require('express')

//express app

const app = express()

//port no
const PORT = 4000;

//LISTE for request

app.listen(PORT,()=>{
    console.log(`Server is up and listening on port:${PORT}`);
    
})