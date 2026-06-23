const jwt = require('jsonwebtoken');
const User = require('../models/userModel')


const requireAuth = (req, res, next) => {
    //verify authentication

    const {authentication} = req.headers

    if(!authentication){
        return res.status(401).json({error:"Authentication token required"})
    }

    //Bearer hhdhgfh.dggfdhgf.hsfgdyy
    const token = authentication.split(' ')[1]

    try{
        const {_id} = jwt.verify(token, process.env.SECRET)
    }catch(error){
        console.log(error)
        res.status(401).json({error:'Request is not authorised'})
        
    }
}