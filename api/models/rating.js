const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
  rating: { // rating given by the user
    type: Number,
    required: true
  },
  good: { // good that the vendor sells
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Good'
  },
  vendor: { // user who sells the good
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  user: { // user who rates the vendor
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true })

ratingSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
  }
})

module.exports = mongoose.model('Rating', ratingSchema)