const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Appointment = new Schema({
    time: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    }, 
    person: {
        type: Schema.Types.ObjectId,
        ref: 'Person'
    }
  
    
});

module.exports = mongoose.model('Appointment', Appointment)