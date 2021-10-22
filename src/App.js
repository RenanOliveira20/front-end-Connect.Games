import { Route, Switch } from 'react-router';
import Home from './components/Home';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './components/Home/SignUp';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component ={Home} />
        <Route path = '/signup' component = {SignUp}/>
        <Route path = '/profile' component = {Profile}/>
      </Switch>
    </div>
  );
}

export default App;
