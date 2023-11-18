const {model, Schema} = require('mongoose');

const RolSchema = new Schema({
    tipo : {
        type: String,
        enum: ['Usuario Normal', 'Usuario grupo cineasta','Usuario cineasta famoso','Administrador'],
        required: true
    }
});

module.exports = model('Rol', RolSchema);