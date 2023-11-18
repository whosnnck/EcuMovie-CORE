const {model, Schema} = require('mongoose');

const CategoriaSchema = new Schema({
    tipo : {
        type: String,
        enum: ['Accion', 'Drama','Comedia','Ciencia Ficcion','Fantasia'],
        required: true
    }
});

module.exports = model('Categoria', CategoriaSchema);