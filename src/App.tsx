import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/galba'>
					GALBA VELOSO
					<Link to='/'>home</Link>
				</Route>
				<Route>
					Hi from App!!
					<Link to='/galba'>Galba</Link>
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App

