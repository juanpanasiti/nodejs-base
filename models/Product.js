const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    //_id: Schema.Types.ObjectId,
    instrumento: {
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
    imagen: String,
    precio: {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
        min: 0.0
    },
    costoEnvio: {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
        min: 0.0
    },
    cantidadVendida: {
        type: Number,
        required: true,
        min: 0
    },
    descripcion: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Producs', ProductSchema)