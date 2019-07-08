import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MiniDrawer from './components/organisms/MiniDrawer'
import { MemoryRouter as Router } from 'react-router'

function App() {
  return (
    <Router>
      <MiniDrawer />
    </Router>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
