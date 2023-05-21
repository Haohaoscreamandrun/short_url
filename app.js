//Include packages
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const ShortUrl = require('./models/short_url')

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

// Set engine
app.engine('handlebars', exphbs.engine({
  defaultLayout: 'main',
  extname: '.handlebars'
}))
app.set('view engine', 'handlebars')

// Body parser
app.use(express.urlencoded({extended: true}))

//hbs
app.get('/', (req,res)=>{
  res.render('index')
})

app.post('/respond',(req, res)=>{
  const originalUrl = req.body.original
  let shortUrl = ''
  // Search for same url
  ShortUrl
    .findOne({'input': originalUrl})
    .then((url)=>{
      if (url){
        // if yes, post the same url
        shortUrl = url.output
        return Promise.resolve()
      } else {
        // if no, create a new one
        shortUrl = `localhost:${port}/redirect/${randomUrl(5)}`
        // store on MongoDB
        return ShortUrl.create({input: originalUrl, output: shortUrl})
      }
    })
    
    // direct to /respond
    .then(()=>{
      // console.log(shortUrl)
      res.render('respond', {shortUrl})
    })
    // catch error
    .catch(err => console.error(err))
})

app.get('/redirect/:id',(req,res)=>{

})

//Listen to port
app.listen(port, ()=>{
  console.log(`App is running on localhost:${port}`)
})

// Function
function randomUrl(digits){
  console.log("this function will generate 5 digits of random algebra and numbers combination")
  // define the choices
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  // construct the pool
  let collection = []
  collection = collection.concat(lowerCaseLetters.split(''))
  collection = collection.concat(numbers.split(''))
  // generating
  let url = ''
  for ( let i = 0 ; i < Number(digits) ; i ++){
    let index = Math.floor(Math.random() * collection.length)
    url += collection[index]
  }
  // return result
  return url
}