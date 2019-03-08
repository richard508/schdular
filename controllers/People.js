const Person = require('../models/Person')

const peopleController = {
  create: (req, res) => {
    Person.create(req.body).then (person => {
      res.send(person)
    })
  },
  edit: (req, res) => {
    person.findById(req.params.id).then(person => {
      res.send(person)
    })
  },
  update: (req, res) => {
    person.findByIdAndUpdate(req.params.id, req.body).then(person => {
      person.save()
      res.send(person)
    })
  }
}

module.exports = peopleController