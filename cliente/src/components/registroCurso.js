
import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'

function FormularioCurso() {

    /* registrar Cliente-------------------------------------- */
    const [codigo, setCodigo] = useState(' dsfs')
    const [nombre, setNombre] = useState('')
    const [tiempo, setTiempo] = useState('')
    const [profesor, setProfesor] = useState('')


    const registrar = async (e) => {
        e.preventDefault()
        const NuevoCurso = { codigo, nombre, tiempo, profesor}
        const respuesta = await Axios.post('http://localhost:4000/Cursos', NuevoCurso)
        const mensaje = respuesta.data.mensaje
        Swal.fire({
            icon: 'success',
            title: mensaje,
            showConfirmButton: true,
            timer: 2500
        })
    }
    /* -------------------------------------------------- */



    /* ------------------------------------- */
    return (
        
        <body className="body-Curso">
           
            <div className="caja">
                <h3>Registro de Curso</h3>
                <form onSubmit={registrar}>
                    <div>
                        <input placeholder="Ingrese el código del curso" required onChange={
                            e => setCodigo(e.target.value)
                        } />
                    </div>
                    <div>
                        <input placeholder="Ingrese el nombre" required onChange={
                            e => setNombre(e.target.value)
                        } />
                    </div>
                    <div>
                        <input placeholder="Ingrese el tiempo" required onChange={
                            e => setTiempo(e.target.value)
                        } />
                    </div>
                    <div>
                        <input placeholder="Ingrese el nombre del profesor" required onChange={
                            e => setProfesor(e.target.value)
                        } />
                    </div>
                    <div>
                        
                    </div>
                    <div className="boton">
                        <button type="submit"> Registrar </button>
                    </div>
                </form>
            </div>


        </body>
    )
}
export default FormularioCurso;



