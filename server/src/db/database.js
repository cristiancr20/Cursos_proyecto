const mongoose = require ('mongoose')
URI=('mongodb://localhost/bd_curso')

mongoose.connect(URI,{
    useNewUrlPerser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then(db=>console.log('Conectado a la base de datos'))
.catch(error=>console.log('No se pudo conectar con la BD'))

module.exports = mongoose