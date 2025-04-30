const mongoose = require('mongoose');

const PostreSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    cantidad: Number,
    ingredientes: String,
    imagep: String,
    createdAT: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Postre', PostreSchema);
