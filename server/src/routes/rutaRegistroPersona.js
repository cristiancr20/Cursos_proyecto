const {Router} = require('express')
const route = Router()
const control = require('../controllers/controllerPersona')

//obtener datos desde el backend
route.get('/',control.leer)
//llevar datos al backend, nuevo registro
route.post('/',control.crear)
//actualizar un registro
route.put('/',control.actualizar)
//borrar un registro
route.delete('/',control.eliminar)

module.exports = route