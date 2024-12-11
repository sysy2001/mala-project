import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Element from './component/element';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     {/* <h1 className="text-5xl font-editor">  Mala Project</h1> */}
      <Element/>
    </div>
  );
}

export default App;
