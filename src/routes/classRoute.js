const { Router } = require('express')
const ClassController = require('../controllers/ClassController')

const router = Router()

router.get('/class', ClassController.index)
router.get('/class/:id', ClassController.findById)
router.post('/class', ClassController.create)
router.put('/class/:id', ClassController.update)
router.delete('/class/:id', ClassController.delete)

module.exports = router