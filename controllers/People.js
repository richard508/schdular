const Person = require('../models/Person')

const peopleController = {
  create: (req, res) => {
    Person.create(req.body).then (person => {
      res.send(person)
    })
  },
  edit: (req, res) => {
    person.findOne({_id: req.params.id}).then(person => {
      res.send(person)
    })
  },
  update: (req, res) => {
    person.findOneAndUpdate({_id: req.params.id}, req.body).then(person => {
      person.save()
      res.send(person)
    })
  }
}

module.exports = peopleController