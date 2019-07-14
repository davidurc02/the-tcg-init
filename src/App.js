import React from 'react';
import './App.css';
import { MemoryRouter as Router } from 'react-router'

import { routes } from './routes'

function App() {
	return (
		<Router>
			{routes()}
		</Router>
	)
}

export default App;