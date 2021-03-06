import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import PokemonCardGenerator from './pages/PokemonCardGenerator';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/pkmn' component={PokemonCardGenerator} />
        <Route path='/' component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
