const mongoose = require('mongoose')

const subscriberShema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  userChannel: {
    type: String,
    required: true
  },
  userDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Subscriber', subscriberShema)