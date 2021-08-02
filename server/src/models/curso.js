const mongoose = require ('mongoose')

const nuevoCurso = mongoose.Schema({
    id: String,
    codigo: String,
    nombre: String,
    tiempo: String,
    profesor: String,

})


module.exports = mongoose.model('curso',nuevoCurso)