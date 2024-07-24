const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
  good: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Good'
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  type: { // type of transaction, either 'purchase' or 'rent'
    type: String,
    required: true
  },
  method: { // method of payment, either 'cash' or 'credit card'
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  status: { // status of the transaction, either 'pending', 'completed' or 'cancelled'
    type: String,
    required: true
  }
}, { timestamps: true })

transactionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
  }
})

module.exports = mongoose.model('Transaction', transactionSchema)