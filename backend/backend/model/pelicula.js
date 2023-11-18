const {model, Schema} = require('mongoose');

const PeliculaSchema = new Schema({
    nombre : {type: String, required: true, unique: true},
    sinopsis : {type: String, required: true},
    productor : {type: String, required: true},
    director : {type: String, required: true},
    clasificacion : {type: String, required: true},
    tipo : {
        type: String,
        enum: ['Accion','Comedia','Drama','Ciencia Ficcion','Fantasia'],
        required: true
    },
    image: {
        url : String,
        public_id: String,
    }
});

module.exports = model('Pelicula', PeliculaSchema);