import React from 'react'
import EmployeesStyle from './style'
import { Switch, Route } from 'react-router-dom'
import EditEmployee from './editEmployee'
import AddEmployee from './addEmployee'
import ShowEmployees from './showEmployees'
import logo from '@/assets/images/logoSeidor.png'

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
			<Route path="/">
				<EmployeesStyle>
					<img src={logo} alt="Logo Seidor"/>
				</EmployeesStyle>
			</Route>
		</Switch>
	)
}

export default Employees
