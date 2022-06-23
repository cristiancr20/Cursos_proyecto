import React from 'react';
import axios from 'axios';
import './listarCursos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class listarCursos extends React.Component {
    state = {
        cursos: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/Cursos/')
            .then(res => {
                const cursos = res.data;
                this.setState({ cursos });
            })
    }

    render() {
        return (
            <div className="container">
                <div className="TitleCursos">
                    <h2>Cursos</h2>
                </div>
                <div className="caja" >
                    {this.state.cursos.map(datos => {
                        return (
                                <div className="carta">
                                    <div className="titulo">
                                        <h3>{datos.nombre}</h3>
                                    </div>
                                    <div className="carta-content">
                                        <h4>Profesor: {datos.profesor}</h4>
                                        <p>Tiempo: {datos.tiempo}</p>
                                        <p>Cod: {datos.codigo}</p>
                                    </div>
                                </div>


                        )
                    })
                    }

                </div>
            </div>
        )
    }
}