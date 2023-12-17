const express = require('express')
const router = express.Router()
const codeRouter = require('./code')

router.use('/code', codeRouter)

module.exports = router