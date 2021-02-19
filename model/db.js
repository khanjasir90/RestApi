const mongoose = require('mongoose')
require('./model')
const conn_url = "mongodb://localhost:27017/StudentDb"
mongoose.connect(conn_url,{useNewUrlParser:true},(err)=>{
    if(!err) console.log('Connection created')
    else console.log('Error while connected to database')
})