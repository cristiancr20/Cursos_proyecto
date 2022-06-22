/* eslint-disable no-undef */
import React from 'react'
import axios from 'axios';



class  Login extends React.Component  {

  state = {
    personas: []
  }

  componentDidMount(){
    axios.get('http://localhost:4000/Personas/')
      .then(res => {
        const personas = res.data;
        this.setState({ personas });
      })

  }

  log(){
    this.setState.personas.map(datos =>{
      let correo=datos.email
      let contraseña=datos.password
      if(email=== correo && contraseña===password){
        window.location("/listarCursos");
      }else{
        alert("Error: " + contraseña);
      }
    })
  }

  

    render(){


    return (
      <>
        <div className="caja">
          <form onsubmit={log}>
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
              <button type="submit"> Iniciar Sesion </button>
            </div>
          </form>
        </div>
      </>
    )
  }
}



export default Login