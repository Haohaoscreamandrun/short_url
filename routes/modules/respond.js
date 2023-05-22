const express = require('express')
const ShortUrl = require('../../models/short_url')
const router = express.Router()
const port = 3000

router.get('/:shortUrl',(req,res)=>{
  const shortUrl = `localhost:${port}/${req.params.shortUrl}`
  console.log(shortUrl)
  ShortUrl
    .findOne({'output': shortUrl})
    .then((url)=>{
      res.redirect(url.input)
    })
    .catch(err => console.error(err))
})

module.exports = router