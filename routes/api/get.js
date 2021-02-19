const Model = require('../../model/model')
const express = require('express')
const model = require('../../model/model')
const router = express.Router()

router.get('/api/students/:id',(req,res) => {
    const rollno = parseInt(req.params.id)
    model.findOne({rollno:rollno},function(err,obj){
        console.log(obj.name)
    })
})
module.exports = router