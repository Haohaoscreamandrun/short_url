//Include packages
const express = require('express')
const exphbs = require('express-handlebars')
const ShortUrl = require('./models/short_url')

//variables
const app = express()
const port = 3000

//MongoDB connection
require('./config/mongoose')

// Set engine
app.engine('handlebars', exphbs.engine({
  defaultLayout: 'main',
  extname: '.handlebars'
}))
app.set('view engine', 'handlebars')

// Body parser
app.use(express.urlencoded({extended: true}))

// router
const routes = require('./routes')
app.use(routes)

//Listen to port
app.listen(port, ()=>{
  console.log(`App is running on localhost:${port}`)
})

