import React from 'react';
import axios from 'axios';
import './registro-list.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class listarPersonas extends React.Component {
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

    render() {
        return (
            <div className="content">
                <table className="table table-hover">
                    <thead >
                        <tr>
                            <th>Cedula</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Edad</th>
                        </tr>
                    </thead>

                    {this.state.personas.map(datos => {
                        return (
                            <tbody >
                                <tr key={datos}>
                                    <td>{datos.cedula}</td>
                                    <td> {datos.nombre}</td>
                                    <td>{datos.apellido}</td>
                                    <td>{datos.edad}</td>
                                    <form method="DELETE"> 
                                        <button type="submit" class="btn btn-danger btn-block btn-sm " >Delete</button>

                                    </form>
                                </tr>
                            </tbody>
                        )
                    })
                    }

                </table>
            </div>
        )
    }
}