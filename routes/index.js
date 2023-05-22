const express = require('express')
const router = express.Router()

// home
const home = require('./modules/home')
router.use('/', home)

// respond
const respond = require('./modules/respond')
router.use('/:shortUrl', respond)

module.exports = router