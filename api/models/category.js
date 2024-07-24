const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: [{
    type: String,
    required: true
  }]
}, { timestamps: true })

categorySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.createdAt
    delete returnedObject.updatedAt
  }
})

module.exports = mongoose.model('Category', categorySchema)