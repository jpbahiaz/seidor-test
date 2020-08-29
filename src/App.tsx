import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Employees from './pages/employees'
import AppStyle from './appStyle'
import Page from './components/page'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/'>
					<Page>
						<Employees />
					</Page>
				</Route>
			</Switch>
			<AppStyle />
		</BrowserRouter>
	)
}

export default App

