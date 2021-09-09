import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import User from "./components/User";
import Users from "./components/Users";
function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
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
        <Route path="/user/:id" component={User}></Route>
      </Switch>
    </div>
  </Router>
  );
}
export default App;
