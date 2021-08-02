//la api expres maneja autenticación
const express  = require ('express')
const app = express()

//morgan muestra la petición por consola
const morgan = require ('morgan')

//cors interpreta lo que hace el navegador
//sirve para la conexion cliente servidor
const cors = require ('cors')

//pasa las peticiones a un cuerpo
const bodyparser = require ('body-parser')




require ('./db/database')
/* require('./db/main') */


//Asignacion de puertos
app.use(cors())
app.set('Port',4000)
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.unsubscribe(bodyparser.json())


//Peticiones



//RUTAS SERVIDOR

app.use('/Personas/',require('./routes/rutaRegistroPersona'))
app.use('/Cursos/',require('./routes/rutaRegistroCurso'))

app.listen(app.get('Port'),()=>{
    console.log('Servidor funcionando'),app.get('Port')
})


