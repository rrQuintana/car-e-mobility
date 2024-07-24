const mongoose = require('mongoose')

const pictureSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true
  },
  url: {
    type: String,
    minlength: 3,
    required: true
  },
  type: {
    type: String,
    minlength: 3,
    required: true
  },
  good: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Good'
  }
}, { timestamps: true })

pictureSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
  }
})

module.exports = mongoose.model('Picture', pictureSchema)