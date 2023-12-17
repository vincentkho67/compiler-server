const express = require('express')
const router = express.Router()
const CodeController = require('../controller/code_controller')

router.post('/', CodeController.postCode)

module.exports = router