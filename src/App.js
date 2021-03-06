import { Route, Switch } from "react-router";
import Home from "./components/Home";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/Home/SignUp";

import UsersLobby from "./components/Users";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import GameLobby from "./components/GamesLobby";
import GameInfo from "./components/GamesInfo";
import ProfileFriend from "./components/ProfileFriend";


const App = () => {
  return (
    <div className="App">
      <Switch>

        <Route exact path = '/' component ={Home} />
        <Route path = '/signup' component = {SignUp}/>
        <Route path = '/feed' component = {Feed}/>
        <Route exact path = '/profile' component = {Profile}/>
        <Route exact path = '/profile/:id' component = {ProfileFriend}/>
        <Route exact path="/games" component={GameLobby} />
        <Route 
          path='/games/:_id'
          render={(props) => 
          <GameInfo {...props}/>
        }
        />
        <Route path='/users' component={UsersLobby}/>
      </Switch>
    </div>
  );
};

export default App;
