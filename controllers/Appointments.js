const Appointment = require('../models/Appointment')

const appointmentsController = {
  index: (req, res) => {
    Appointment.find()
    .populate('person')
    .then(data => {
      res.json(data)
    })
  }
}
module.exports = appointmentsController;