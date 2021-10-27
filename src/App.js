import { Route, Switch } from 'react-router';
import Home from './components/Home';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './components/Home/SignUp';
import GameLobby from './components/GamesLobby';
import GameInfo from './components/GamesInfo'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component ={Home} />

        <Route path = '/signup' component = {SignUp}/>

        <Route 
          exact
          path='/games' 
          component = {GameLobby}
        />


        <Route
          path='/games/teste'
          component = {GameInfo}
        />


      </Switch>
    </div>
  );
}

export default App;
