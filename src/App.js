import React from 'react';
import './App.css';
import Navbar from "./Component/Navbar.js";
import Header from "./Component/Header.js";
import URL_Router_About from "./Router/URL_Router_About.js";
import Footer from "./Component/Footer.js";
import Home from "./Component/Home.js";

function App() {
  return (
    <div className="app">
	  <Navbar/>
      <Header />
      <Home />
      <URL_Router_About/>
      <Footer/>
    </div>
  );
}

export default App;
