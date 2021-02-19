const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    rollno : Number,
    name : String,
    dept : String,
    percentage : Number
})
module.exports = mongoose.model('student',studentSchema)