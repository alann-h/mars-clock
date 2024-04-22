import React from 'react';
import logo from './mars.svg';
import './App.css';
import MarsClockApp from './components/MarsClockApp'; // Import the Mars Clock component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Mars Clock by Alan Hattom</h1>
        <MarsClockApp /> {/* Include the Mars Clock component to display Mars time */}
      </header>
    </div>
  );
}

export default App;
