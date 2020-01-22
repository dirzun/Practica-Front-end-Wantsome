import React from "react";

const nav = ()=>{
    let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  };
};
const HeadNav = () =>{
    return ( 
        <nav>
            <ul>
                <li><a href="#becomeahost">Become a host</a></li>
                <li><a href="#help">Help</a></li>
                <li><a href="#signup">Sign Up</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    );
}
export default HeadNav;