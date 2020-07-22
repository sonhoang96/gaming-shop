import React from 'react';
import './App.css';
import Navbar from "./Component/Header/Navbar.js";
import Header from "./Component/Header/Header.js";
import Footer from "./Component/Footer/Footer.js";
import Home from "./Component//Home/Home.js";
import About from "./Component/About/About.js";

function App() {
  return (
    <div className="app">
	  <Navbar/>
      <Header />
      <Home />
      <About />
      <Footer/>
    </div>
  );
}

export default App;
