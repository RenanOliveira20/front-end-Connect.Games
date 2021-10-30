import { Route, Switch } from "react-router";
import Home from "./components/Home";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/Home/SignUp";

import Feed from "./components/Feed";
import Profile from "./components/Profile";
import GameLobby from "./components/GamesLobby";
import GameInfo from "./components/GamesInfo";
import ProfileFriend from "./components/ProfileFriend";
import PostDetail from "./components/PostDetail/index";

const App = () => {
  return (
    <div className="App">
      <Switch>

        <Route exact path = '/' component ={Home} />
        <Route path = '/signup' component = {SignUp}/>
        <Route path = '/feed' component = {Feed}/>
        <Route exact path = '/profile' component = {Profile}/>
        <Route path = '/profile/:id' component = {ProfileFriend}/>
        <Route exact path="/games" component={GameLobby} />
        <Route exact path ="/post/:id/:user" component ={PostDetail}/>
        <Route 
          path='/games/:_id'
          render={(props) => 
          <GameInfo {...props}/>
        }
        />
        
      </Switch>
    </div>
  );
};

export default App;
