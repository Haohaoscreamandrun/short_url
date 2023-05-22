const mongoose = require('mongoose')
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

module.exports = db