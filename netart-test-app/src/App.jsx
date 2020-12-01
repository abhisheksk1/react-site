import React from 'react';
import './App.css';
import Content from './component/Content';
import Content2 from './component/Content2';
import Footer from './component/Footer';
import logo from "./Image/logo.png"

function App() {
  return (
    <div>
      <div className="App">
        <img src={logo} alt="logo" height="150px"/>
      </div>
      <Content/>
      <Content2/>
      <Footer/>
      
    </div>
  );
}


export default App;
