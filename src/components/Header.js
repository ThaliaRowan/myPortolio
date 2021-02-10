import React from "react";
import { HashRouter as Router, Route, Switch, Link }  from "react-router-dom";

function Header(){
    
    return(
        <div>
           <nav class="navbar navbar-dark navbar-expand-lg ">
      <div className="container">

        <a className="navbar-brand" href="index.html" id="logo">Thalia Romany</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
     
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
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
