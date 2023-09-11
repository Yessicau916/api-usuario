const { Schema, model } = require('mongoose')
const UsuarioSchema = Schema({
    nombreUsu: {
        type: String,
        unique: true,
        required: [true, 'El usuario es obligatorio!']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio!']
    },
    apellidos: {
        type: String,
        required: [true, 'Los apellidos son obligatorios!']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio!']
    },
    celular: {
        type: String,
        required: [true, 'El número de celular es obligatorio!'],
        lenght: [10, 'Debe tener máximo 10 caracteres']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria!'],
        minlength: [8, 'Debe tener mínimo 8 caracteres...'],
        maxlength: [15, 'Debe tener máximo 15 caracteres']
    },
    rol: {
        type: String,
        required: true,
        enumeracion: ['Admin', 'empleado', 'Cliente']
    }
})
module.exports = model('Usuario', UsuarioSchema)