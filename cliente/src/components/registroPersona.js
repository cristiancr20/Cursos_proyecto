
import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import './registro-list.css';

function FormularioPersona() {

    /* registrar Cliente-------------------------------------- */
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState('')


    const registrar = async (e) => {
        e.preventDefault()
        const NuevaPersona = { email, password }
        const respuesta = await Axios.post('http://localhost:4000/Personas', NuevaPersona)
        const mensaje = respuesta.data.mensaje
        Swal.fire({
            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
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
                        <input type="email" placeholder="Email" required onChange={
                            e => setEmail(e.target.value)
                        } />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" required onChange={
                            e => setPassword(e.target.value)
                        } />
                    </div>
                    
                    <div className="boton">
                        <button type="submit"> Registrar </button>
                    </div>
                </form>
            </div>
        </body>
    )
}
export default FormularioPersona;



