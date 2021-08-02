import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import registroPersonas from './components/registroPersona';
import RegistroCurso from './components/registroCurso';
import ListarCursos from './components/listarCursos';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/registrarPersona" exact component ={registroPersonas}/>
        <Route path ="/registrarCurso" exact component ={RegistroCurso}/>
        <Route path="/listarCursos" exact component ={ListarCursos}/>
      </Switch>
    </Router>
  );
}

export default App;
