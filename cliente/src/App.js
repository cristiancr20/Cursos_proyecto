import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import registroPersonas from './components/registroPersona';
/* import RegistroCurso from './components/registroCurso'; */
import ListarCursos from './components/listarCursos';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        
        <Route path="/" exact component={Home}/>
        <Route path ="/registrar" exact component ={registroPersonas}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/listarCursos" exact component ={ListarCursos}/>
      </Switch>
    </Router>
  );
}

export default App;
