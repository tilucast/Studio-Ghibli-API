import React from 'react';
import logo from './assets/ghibli2.png'
import Filme from './components/Filme'
import './App.css'

function App() {
  return (
    <>
        <img className="logo" src={logo} alt="ghibli-logo"/>
      
        <Filme />
    </>
  );
}

export default App;
