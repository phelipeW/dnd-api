const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')

const router = Router()

router.get('/people', PeopleController.index)
router.get('/people/:id', PeopleController.findById)
router.post('/people', PeopleController.create)
router.put('/people/:id', PeopleController.update)
router.delete('/people/:id', PeopleController.delete)

router.get('/people/:studentId/registration', PeopleController.indexRegistration)
router.get('/people/:studentId/registration/:registrationId', PeopleController.findRegistrationById)
router.post('/people/:studentId/registration', PeopleController.createRegistration)
router.put('/people/:studentId/registration/:registrationId', PeopleController.updateRegistration)
router.delete('/people/:studentId/registration/:registrationId', PeopleController.deleteRegistration)

module.exports = router