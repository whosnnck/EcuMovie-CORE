const {model, Schema} = require('mongoose');

const CalificacionSchema = new Schema({
    tipo : {
        type: String,
        enum: ['Muy Mala', 'Mala','Regular','Buena','Excelente'],
        required: true
    },
    comentario : { type: String}
});

module.exports = model('Calificacion', CalificacionSchema);