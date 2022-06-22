const mongoose = require ('mongoose')

const nuevaPersona = mongoose.Schema({
    id: String,
    email: String,
    password: String,

})


module.exports = mongoose.model('persona',nuevaPersona)