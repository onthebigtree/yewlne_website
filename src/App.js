// src/App.js

import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="type-effect">Welcome to My Personal Website</h1>
      </header>
      <main className="App-content">
        <p className="type-effect">Yewlne Website</p>
        <div className="animated-box"></div>
        <button className="interactive-button" onClick={handleClick}>Click me!</button>
      </main>
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Yewlne</p>
      </footer>
    </div>
  );
}

export default App;
