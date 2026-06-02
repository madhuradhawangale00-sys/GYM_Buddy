const express=require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    res.json({
        msg:'GET all workouts'
    })
})

router.get('/:id',(req,res)=>{
    res.json({
        msg:'GET a single workout by id'
    })
})

router.post('/',(req,res)=>{
    res.json({
        msg:'POST a new workout'
    })
})

router.delete('/:id',(req,res)=>{
    res.json({
        msg:'DELETE A workout'
    })
})

router.patch('/:id',(req,res)=>{
    res.json({
        msg:'PATCH A workout'
    })
})

module.exports=router