const Model = require('../../model/model')
const express = require('express')
const model = require('../../model/model')
const router = express.Router()

router.post('/api/students/',(req,res)=>{
    const student = new Model({
        rollno : req.body.rollno,
        name : req.body.name,
        dept : req.body.dept,
        percentage : req.body.percentage
    })
    if(student.save()){
        res.send('Response Saved')
    }else{
        res.send('Response not Saved')
    }
})

router.put('/api/students/:id',(req,res)=>{
    var query = { rollno : parseInt(req.params.id)}
    var newVal = {
        $set : {
            rollno : req.body.rollno,
            name : req.body.name,
            dept : req.body.dept,
            percentage : req.body.percentage
        }
    }
    model.updateOne(query,newVal,function(err,response){
        if(err) throw err
        else console.log("Updated")
    })
})

router.delete('/api/students/:id',(req,res)=>{
    var query = {rollno : parseInt(req.params.id)}
    model.deleteOne(query,function(err,response){
        if(err) throw err
        else console.log('Record Deleted')
    })
})

module.exports = router