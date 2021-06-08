const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path');

const cors = require('cors')
const routes = require('./router/index')



 //conexão ao banco
 
    mongoose.connect('mongodb+srv://admin:admin123@cluster0.ipwbz.mongodb.net/ecommerce?retryWrites=true&w=majority',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },console.log('BANCO TA ON!'))

app.use(cors())
app.use(express.json())

app.use(routes)



    

app.listen(2020, ()=>{
    console.log("SERVER TA ON!")

    
})
