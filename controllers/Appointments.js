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
    Appointment.findOne({_id: req.params.id}).populate('person').then(appt => {
      res.send(appt)
    })
  },
  update: (req, res) => {
    Appointment.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(appt => {
      appt.save()
      res.send(appt)
    })
  }
}
module.exports = appointmentsController