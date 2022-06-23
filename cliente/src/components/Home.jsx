import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/profesor.svg';
import './Home.css';

function Home() {
    return (
        <>
            <div className="Home">
            <div className="Home-information">
                    <div className="Home-logo">
                        <img src={Logo} alt="Foto Inicial" />
                    </div>
                    <div className="Home-title">
                        <h1>Developer</h1>
                        <h1>¡La mejor manera de aprender!</h1>
                        <div className="botones">
                            <Link to="/login">
                                <button className='iniciosesion'>
                                    Iniciar Sesion
                                </button>
                            </Link>

                            <Link to="/registrar">
                                <button className='registrar'>
                                    Registrarse
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
