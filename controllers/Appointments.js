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
  },
  edit: (req, res) => {
    Appointment.findById(req.params.id).populate('person').then(appt => {
      res.send(appt)
    })
  },
  update: (req, res) => {
    Appointment.findByIdAndUpdate(req.params.id, req.body).then(appt => {
      appt.save()
      res.send(appt)
    })
  }
}
module.exports = appointmentsController