//Include packages
const express = require('express')
const mongoose = require('mongoose')
//variables
const app = express()
const port = 3000

//MongoDB connection
if(process.env.NODE_ENV !== 'production'){ //use dotenv only in development, to get .env
  require('dotenv').config()
}
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection //learn the connection state
db.on('error',()=>{
  console.log('mongodb error!')
})
db.once('open',()=>{
  console.log('mongodb connected!')
})


//Home route
app.get('/', (req,res)=>{
  res.send("Hello")
})

//Listen to port
app.listen(port, ()=>{
  console.log(`App is running on localhost:${port}`)
})