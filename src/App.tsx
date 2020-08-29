import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Employees from './pages/employees'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/'>
					<Employees />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App

