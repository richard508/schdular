const Person = require('../models/Person')

const peopleController = {
  create: (req, res) => {
    Person.create(req.body).then (person => {
      res.send(person)
    })
  },
  edit: (req, res) => {
    Person.findOne({_id: req.params.id}).then(person => {
      res.send(person)
    })
  },
  update: (req, res) => {
    Person.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(person => {
      person.save()
      res.send(person)
    })
  },
  delete: (req, res) => {
    Person.findByIdAndDelete(req.params.id)
      .then(() => {
          res.send(200)
      })
  }
}

module.exports = peopleController