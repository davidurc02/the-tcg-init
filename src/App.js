import React from 'react';
import './App.css';
import { MemoryRouter as Router } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import { routes } from './routes'

function App() {
	return (
		<Router>
			<BrowserRouter>
				{routes()}
			</BrowserRouter>
		</Router>
	)
}

export default App;