import React from 'react'
import EmployeesStyle from './style'
import { Switch, Route } from 'react-router-dom'
import EditEmployee from './editEmployee'
import AddEmployee from './addEmployee'
import ShowEmployees from './showEmployees'

function Employees() {
	return (
		<Switch>
			<Route path="/employees/edit/:id">
				<EditEmployee />
			</Route>
			<Route path="/employees/add">
				<AddEmployee />
			</Route>
			<Route path="/employees/show">
				<ShowEmployees />
			</Route>
			<Route path='/'>
				<EmployeesStyle>
					Hi from Employees!
				</EmployeesStyle>
			</Route>
		</Switch>
	)
}

export default Employees
