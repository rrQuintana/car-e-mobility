const mongoose = require('mongoose')

const fieldSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, { timestamps: true })

fieldSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
  }
})

module.exports = mongoose.model('Field', fieldSchema)