import React from 'react';
import './App.css';
import Header from "./Component/Header.js";
import Home from "./Component/Home.js";
import URL_Router from "./Router/URL_Router.js";
import Footer from "./Component/Footer.js";

function App() {
  return (
    <div className="app">
      <Header/>
      <Home />
	      <URL_Router/>
      <Footer/>
    </div>
  );
}

export default App;
