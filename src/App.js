import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App(){
    

    return (
        <Router>
             <div>
             
            <Header />
            <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />           
            <Route exact path="/contact" component={Contact} />
             </Switch>
            <Footer />
        
        </div>
        </Router>
       
    )
}

export default App;