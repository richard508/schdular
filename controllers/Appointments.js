const Appointment = require('../models/Appointment')

const appointmentsController = {
  index: (req, res) => {
    Appointment.find()
    .populate('person')
    .then(data => {
      res.json(data)
    })
  },
  create: (req, res) => {
    Appointment.create(req.body).then(appt => {
      res.send(appt)
    })
  }
}
module.exports = appointmentsController;