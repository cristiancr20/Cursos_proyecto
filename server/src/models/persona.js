const mongoose = require ('mongoose')

const nuevaPersona = mongoose.Schema({
    id: String,
    cedula: String,
    nombre: String,
    apellido: String,
    edad: String,

})


module.exports = mongoose.model('persona',nuevaPersona)