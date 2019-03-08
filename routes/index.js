const express = require('express')
const router = express.Router()

// controllers
const appointmentsController = require('../controllers/Appointments')

// appoitment routes
router.get('/api/appointments', appointmentsController.index)
router.post('/api/appointments', appointmentsController.create)
module.exports = router