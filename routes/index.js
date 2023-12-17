const express = require('express')
const router = express.Router()
const codeRouter = require('./code')
const assignmentRouter = require('./assignment')

router.use('/code', codeRouter)
router.use('/assignment', assignmentRouter)

module.exports = router