const express = require('express')
const ShortUrl = require('../../models/short_url')
const router = express.Router()
const port = 3000
const randomUrl = require('../../utils/randomUrl')
//hbs
router.get('/', (req,res)=>{
  res.render('index')
})

router.post('/',(req, res)=>{
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
        shortUrl = `localhost:${port}/${randomUrl(5)}`
        // store on MongoDB
        return ShortUrl.create({input: originalUrl, output: shortUrl})
      }
    })
    
    // direct to /respond
    .then(()=>{
      res.render('respond', {originalUrl, shortUrl})
    })
    // catch error
    .catch(err => console.error(err))
})

router.get('/:shortUrl',(req,res)=>{
  const shortUrl = `localhost:${port}/${req.params.shortUrl}`
  ShortUrl
    .findOne({'output': shortUrl})
    .then((url)=>{
      res.redirect(url.input)
    })
    .catch(err => console.error(err))
})

module.exports = router