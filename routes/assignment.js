const express = require('express')
const router = express.Router()
const AssignmentController = require('../controller/assignment_controller')

router.post('/run', AssignmentController.runCode)
router.post('/:id/test', AssignmentController.runTest)
router.post('/submit', AssignmentController.submit)
router.get('/', AssignmentController.getAll)
router.get('/:id', AssignmentController.getOne)

module.exports = router