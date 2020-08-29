import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import ShowEmployees from './pages/showEmployees'
import AddEmployee from './pages/addEmployee'
import EditEmployee from './pages/editEmployee'

function App() {
	const dispatch = useDispatch()
	const { register } = useForm()

	useEffect(() => {
		dispatch({ type: "GALBA" })
	}, [])

	return (
		<BrowserRouter>
			<Switch>
				<Route path="/employees/edit/:id">
					<EditEmployee />
				</Route>
				<Route path="/employees/add">
					<AddEmployee />
				</Route>
				<Route>
					<ShowEmployees />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App

