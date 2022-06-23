
import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import './registrarPersona.css';
import { Link } from 'react-router-dom';
import img_registro from '../Images/registro.svg'


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
            <h3>Se parte de nosotros!</h3>
            <div className="registroPersonas">
                <div className="img_registro">
                    <img src={img_registro} alt="Foto del registro de personas" />
                </div>

                <form onSubmit={registrar}>
                    <div className="form-caja">
                        <h1>Registrate</h1>

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
                        <Link to="/login" className='registro'><p>Iniciar Sesión </p> </Link>
                    </div>
                </form>
            </div>

        </body>
    )
}
export default FormularioPersona;



