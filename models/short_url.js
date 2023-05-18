const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortUrlSchema = new Schema({
  input: {
    type: String,
    required: true
  },
  output: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('ShortUrl', shortUrlSchema)