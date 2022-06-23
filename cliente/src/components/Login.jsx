/* eslint-disable no-undef */
import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './registrarPersona.css';
import img_sesion from '../Images/sigin.svg'


class Login extends React.Component {

  state = {
    personas: []
  }

  componentDidMount() {
    axios.get('http://localhost:4000/Personas/')
      .then(res => {
        const personas = res.data;
        this.setState({ personas });
      })

  }

  /* log(){
    this.setState.personas.map(datos =>{
      let correo=datos.email
      let contraseña=datos.password
      if(email=== correo && contraseña===password){
        window.location("/listarCursos");
      }else{
        alert("Error: " + contraseña);
      }
    })
  } */



  render() {


    return (
      <>
        <body className="body-persona">
          <h3>Se parte de nosotros!</h3>

          <div className="login">
            <div className="img">
              <img src={img_sesion} alt="Foto Inicio Sesion" />
            </div>

            <form >
              <div className="form-caja">
              <h1>Sign In</h1>
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
                  <button type="submit"> Iniciar Sesión </button>
                </div>
                <Link to="/registrar" className='registro'><p>Registrate y aprende con nosotros </p> </Link>
              </div>
            </form>
          </div>
        </body>
      </>
    )
  }
}



export default Login