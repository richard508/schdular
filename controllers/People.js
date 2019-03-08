const Person = require('../models/Person')

const peopleController = {
  create: (req, res) => {
    Person.create(req.body).then (person => {
      res.send(person)
    })
  }
}

module.exports = peopleController