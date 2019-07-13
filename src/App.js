import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MiniDrawer from './components/templates/MiniDrawer'
import { MemoryRouter as Router } from 'react-router'

function App() {
  return (
    <Router>
      <MiniDrawer />
    </Router>
  )
}

export default App;
