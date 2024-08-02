const mongoose = require('mongoose')

const goodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user: { 
    type: String,
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  anio: {
    type: Number,
    required: true
  },
  version: {
    type: String,
    required: true
  },
  placas: {
    type: String,
    required: true
  },
  servicio: {
    type: String,
    required: true
  },
  noServicio: {
    type: String,
  },
  fechaYHoraRecogida: {
    type: String,
  },
  fechaYHoraEntrega: {
    type: String,
  },
  lugarRecogida: {
    type: String,
  },
  lugarEntrega: {
    type: String,
  },
  estatus: {
    type: Number,
    default: 0
  }
}, { timestamps: true })

goodSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Good = mongoose.model('Good', goodSchema)

module.exports = Good