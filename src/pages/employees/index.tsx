import React from 'react'
import EmployeesStyle from './style'
import { Switch, Route, Link } from 'react-router-dom'
import EditEmployee from './editEmployee'
import AddEmployee from './addEmployee'
import ShowEmployees from './showEmployees'
import logo from '@/assets/images/4tax_logo.png'
import Navbar from '@/components/navbar'
import { ADD_EMPLOYEE, SHOW_EMPLOYEES, EDIT_EMPLOYEE } from '@/common/urls'

const EmployeesLinks = [
	{ text: 'Funcionários', path: '/employees/show' },
	{ text: 'Registrar Funcionário', path: '/employees/add' },
]

function Employees() {
	return (
		<Switch>
			<Route path={ADD_EMPLOYEE}>
				<Navbar links={EmployeesLinks}/>
				<AddEmployee />
			</Route>
			<Route path={SHOW_EMPLOYEES}>
				<Navbar links={EmployeesLinks}/>
				<ShowEmployees />
			</Route>
			<Route path={EDIT_EMPLOYEE}>
				<Navbar links={EmployeesLinks}/>
				<EditEmployee />
			</Route>
			<Route path="/">
				<EmployeesStyle>
					<img src={logo} alt="Logo Seidor"/>
					<section className="content">
						<span className="title">Bem vindo!</span>
						<span className="subtitle">Este sistema é dedicado ao cálculo do IRRF e à listagem de funcionários</span>
						<div className="links">
							<Link to={SHOW_EMPLOYEES}>Funcionários</Link>
							<Link to={ADD_EMPLOYEE}>Registrar Funcionário</Link>
						</div>
					</section>
				</EmployeesStyle>
			</Route>
		</Switch>
	)
}

export default Employees
