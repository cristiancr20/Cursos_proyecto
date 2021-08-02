
import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import ListarPersona from './listarPersonas'
import './registro-list.css';

function FormularioPersona() {

    /* registrar Cliente-------------------------------------- */
    const [cedula, setCedula] = useState(' dsfs')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [edad, setEdad] = useState('')


    const registrar = async (e) => {
        e.preventDefault()
        const NuevaPersona = { cedula, nombre, apellido, edad }
        const respuesta = await Axios.post('http://localhost:4000/Personas', NuevaPersona)
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
        
        <body className="body-persona">
           
            <div className="caja">
                <h3>Registro de Personas</h3>
                <form onSubmit={registrar}>
                    <div>
                        <input placeholder="Ingrese la cedula" required onChange={
                            e => setCedula(e.target.value)
                        } />
                    </div>
                    <div>
                        <input placeholder="Ingrese el nombre" required onChange={
                            e => setNombre(e.target.value)
                        } />
                    </div>
                    <div>
                        <input placeholder="Ingrese el apellido" required onChange={
                            e => setApellido(e.target.value)
                        } />
                    </div>
                    <div>
                        <input placeholder="Ingrese la edad" required onChange={
                            e => setEdad(e.target.value)
                        } />
                    </div>
                    <div className="boton">
                        <button type="submit"> Registrar </button>
                    </div>
                </form>
            </div>
                <ListarPersona></ListarPersona>


        </body>
    )
}
export default FormularioPersona;



