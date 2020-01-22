import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Behost from "./nav/Becomeahost";
import Help from "./nav/Help";
import Signup from "./nav/Signup";
import Login from "./nav/Login";

const nav = ()=>{
    let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  };
};
const HeadNav2 = () =>{
    return ( 
      <Router>
        <nav>
            <ul>
                <li><a href="/becomeahost">Become a host</a></li>
                <li><a href="/help">Help</a></li>
                <li><a href="/signup">Sign Up</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            <Switch>
              <Route exact path="/" component={Behost} />
              <Route exact path="/" component={Help} />
            </Switch>
        </nav>
        </Router>
    );
}
export default HeadNav2;