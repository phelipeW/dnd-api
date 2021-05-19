const { Router } = require('express')
const LevelController = require('../controllers/LevelController')

const router = Router()

router.get('/level', LevelController.index)
router.get('/level/:id', LevelController.findById)
router.post('/level', LevelController.create)
router.put('/level/:id', LevelController.update)
router.delete('/level/:id', LevelController.delete)

module.exports = router