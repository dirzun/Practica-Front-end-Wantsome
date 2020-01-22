import React from 'react';
import './App.css';
import Profile from "./Profile";
import Header from "./Components/Core/Header";
import Navigation from "./Components/Core/Navigation";
import Apartments from "./Components/Apartments/Apartments";
import Users from "./Components/Users";
import {
  BrowserRouter as Router, Route,
  Switch,
} from "react-router-dom";

function App() {
  // const name = 'Mia Khalifa';
  // const image= 'https://ciao.ro/wp-content/uploads/2018/07/mia-3.jpg';

  return (

    <Router>
      <>
        {/*<Profile name={name} time='20;00' imageUrl={image}/>*/}
        <Header/>
        <Navigation/>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/apartments">
            <Apartments />
          </Route>
        </Switch>
      </>
    </Router>


  );
}

export default App;
