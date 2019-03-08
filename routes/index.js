const express = require('express')
const router = express.Router()

// controllers
const appointmentsController = require('../controllers/Appointments')

// appoitment routes
router.get('/api/appointments', appointmentsController.index)
router.post('/api/appointments', appointmentsController.create)
router.get('/api/appointments/:id', appointmentsController.edit)
router.patch('/api/appointments/:id', appointmentsController.update)
module.exports = router