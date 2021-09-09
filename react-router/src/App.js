import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Home from "./components/Home";
import Users from "./components/Users";
function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <NavLink exact activeStyle={{backgroundColor: 'blue'}} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{backgroundColor: 'black'}} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{backgroundColor: 'grey'}} to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users" component={Users}></Route>
        <Route exact path="*">
          <Error/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}
export default App;
