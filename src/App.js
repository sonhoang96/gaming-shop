import React from 'react';
import './App.css';
import Header from "./Component/Header.js";
import Home from "./Component/Home.js";
import About from "./Component/About.js";

function App() {
  return (
    <div className="app">
      <Header/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
