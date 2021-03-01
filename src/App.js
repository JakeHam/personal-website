import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
