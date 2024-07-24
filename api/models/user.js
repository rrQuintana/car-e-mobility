const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true // REQUIRED
  },
  lastName: {
    type: String,
    minlength: 3,
    required: true // REQUIRED
  },
  email: {
    type: String,
    unique: true,
    minlength: 3,
    required: true // REQUIRED
  },
  password: {
    type: String,
    minlength: 6,
    required: true // REQUIRED
  },

}, { timestamps: true })

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.password
  }
})

userSchema.plugin(uniqueValidator)

const User = mongoose.model('User', userSchema)

module.exports = User