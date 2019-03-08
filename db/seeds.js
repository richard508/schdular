require('dotenv').config();

//DB connection
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)

//Models
const Person = require('../models/Person')
const Appointment = require('../models/Appointment')

//create Person
const Richard = new Person({ 
    first_name: 'Richard',
     last_name: 'Almonte', 
     phone: 4045550123,
   
 })


// Create appointment time
const appointment1 = new Appointment({
    person: Richard,
    time: '9:00am',
    isAvailable: false
})
const appointment2 = new Appointment({
    time: '10:00am',
    isAvailable: true
})
const appointment3 = new Appointment({
    time: '11:00am',
    isAvailable: true
})
const appointment4 = new Appointment({
    time: '12:00pm',
    isAvailable: true
})
const appointment5 = new Appointment({
    time: '1:00pm',
    isAvailable: true
})
const appointment6 = new Appointment({
    time: '2:00pm',
    isAvailable: true
})
const appointment7 = new Appointment({
    time: '3:00pm',
    isAvailable: true
})
const appointment8 = new Appointment({
    time: '4:00pm',
    isAvailable: true
})
const appointment9 = new Appointment({
    time: '5:00pm',
    isAvailable: true
})

Person.deleteMany({})
    .then(() => Person.deleteMany({}))
    .then(() => Appointment.deleteMany({}))
    .then(() => Appointment.insertMany([appointment1, appointment4, appointment2, appointment5, appointment3, appointment6, appointment7, appointment8, appointment9]))
    .then(() => Person.insertMany([Richard]))
    .then(() => appointment1.save())
    .then(() => appointment2.save())
    .then(() => appointment3.save())
    .then(() => appointment4.save())
    .then(() => appointment5.save())
    .then(() => appointment6.save())
    .then(() => appointment7.save())
    .then(() => appointment8.save())
    .then(() => appointment9.save())
    .then(() => console.log("Database seeded"))
    .then(() => mongoose.connection.close())
