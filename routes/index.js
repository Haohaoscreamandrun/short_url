const express = require('express')
const router = express.Router()
const home = require('./modules/home')

// home
router.use('/', home)

// router will include URL in index, so actually get to /:shortUrl/:shortUrl. They should all be in root route

module.exports = router