import React from 'react';
import logo from './logo.svg';
import './App.css';
import './app/css/header.css';
import './app/css/button.css';


import Home from '../src/app/pages/Home';
import Header from './app/components/Header';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
