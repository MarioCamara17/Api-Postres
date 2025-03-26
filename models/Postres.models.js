const mongoose = require('mongoose');

const Postres= mongoose.Schema({
    nombre: String,
    precio: Number,
    cantidad: String,
    ingredientes: String,
    imagep:String,
    createdAT: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Postres', Postres);