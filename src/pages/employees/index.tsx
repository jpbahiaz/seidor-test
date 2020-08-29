import React from 'react'
import EmployeesStyle from './style'
import { Switch, Route, Link } from 'react-router-dom'
import EditEmployee from './editEmployee'
import AddEmployee from './addEmployee'
import ShowEmployees from './showEmployees'
import logo from '@/assets/images/4tax_logo.png'

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
					<section className="content">
						<span className="title">Bem vindo!</span>
						<span className="subtitle">Este sistema é dedicado ao cálculo do IRRF e à listagem de funcionários</span>
						<div className="links">
							<Link to='/employees/show'>Funcionários</Link>
							<Link to='/employees/add'>Registrar Funcionário</Link>
						</div>
					</section>
				</EmployeesStyle>
			</Route>
		</Switch>
	)
}

export default Employees
