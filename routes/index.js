const express = require('express')
const router = express.Router()

// controllers
const appointmentsController = require('../controllers/Appointments')
const peopleController = require('../controllers/People')

// appoitment routes
router.get('/api/appointments', appointmentsController.index)
router.post('/api/appointments', appointmentsController.create)
router.get('/api/appointments/:id', appointmentsController.edit)
router.patch('/api/appointments/:id', appointmentsController.update)

//people routes
router.post('/api/people', peopleController.create)
router.get('/api/people/:id/edit', peopleController.edit)
router.patch('/api/people/:id/edit', peopleController.update)
module.exports = router