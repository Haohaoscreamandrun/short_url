//Include packages
const express = require('express')

//variables
const app = express()
const port = 3000

//Home route
app.get('/', (req,res)=>{
  res.send("Hello")
})

//Listen to port
app.listen(port, ()=>{
  console.log(`App is running on localhost:${port}`)
})