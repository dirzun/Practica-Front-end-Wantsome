import React from 'react';
import {Link, Router} from "react-router-dom";

const Navigation = () => {
  return (

  
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/apartments">Apartments</Link>
            </li>
          </ul>
        </nav>
      </div>
    

  );
};

export default Navigation;
