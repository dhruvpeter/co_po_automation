import React from "react";
import Admin from "./Component/Admin/Admin";
import Faculty from "./Component/Faculty/Faculty";
import Login from "./Component/Login/Login";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login handleName/>
          </Route>
          <Route path ='/admin'>
            <Admin  />
          </Route>
          <Route path ='/faculty'>
            <Faculty/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
