const {Router} = require('express')
const route = Router()
const control = require('../controllers/controllerCurso')

route.get('/',control.leer)
route.post('/',control.crear)
route.put('/',control.actualizar)
route.delete('/',control.eliminar)

module.exports = route