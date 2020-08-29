import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Container from "./components/Container";




function App() {
  return (
    <div>

      <Header />
      <Home />


    </div>
  )
}

export default App;

{/* <Router>
<div>
  <Header />
  <NavTabs />
  <Route exact path="/Home" component={Home} />
  <Route exact path="/About" component={About} />
  <Route exact path="/Portfolio" component={Portfolio} />
  <Route exact path="/Contact" component={Contact} />
</div>
<Footer />
</Router> */}