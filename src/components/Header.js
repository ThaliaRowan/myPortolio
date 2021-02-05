import React from "react";
import { HashRouter as Router, Route, Switch, Link }  from "react-router-dom";

function Header(){
    
    return(
        <div>
           <nav class="navbar navbar-expand-lg ">
      <div class="container">

        <a class="navbar-brand" href="index.html" id="logo">Thalia Romany</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
     
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
        <Link to="/"  className="nav-link">
        
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className="nav-link"
        >
          Portfolio
        </Link>
      </li>        
          </ul>
        </div>
    
      </div>
 
    </nav>
        </div>
    );
}

export default Header;