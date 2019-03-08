const express = require('express')
const router = express.Router()

// controllers
const appointmentsController = require('../controllers/Appointments')

// routes
router.get('/api/appointments', appointmentsController.index)
module.exports = router