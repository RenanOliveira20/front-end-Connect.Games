import { Route, Switch } from 'react-router';
import Home from './components/Home';
import './styles.css'
const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component ={Home} />
      </Switch>
    </div>
  );
}

export default App;
