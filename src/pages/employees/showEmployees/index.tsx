import React from 'react'
import ShowEmployeesStyle from './style'
import PageHeader from '@/components/pageHeader'
import { useSelector } from 'react-redux'
import { TApplication } from '@/redux/rootReducer'
import { TEmployee } from '@/redux/modules/employees/types'

function renderEmployees(employees: TEmployee[]) {
	return employees.map((employee: TEmployee) => (
		<tr>
			<td>{ employee.name }</td>
			<td>{ employee.cpf }</td>
			<td>{ employee.salary }</td>
			<td>{ employee.discount }</td>
			<td>{ employee.dependents }</td>
			<td>{ employee.IRRFDiscount }</td>
		</tr>
	))
}

function ShowEmployees() {
	const employees = useSelector((state: TApplication) => state.employees.data)

	return (
		<ShowEmployeesStyle>
			<PageHeader title='Funcionários'/>
			<div className="employees-table">
				<table>
					<thead>
						<tr>
							<th>Nome</th>
							<th>CPF</th>
							<th>Salário</th>
							<th>Desconto</th>
							<th>Dependentes</th>
							<th>Desconto IRPF</th>
						</tr>
					</thead>
					{ renderEmployees(employees) }
				</table>
			</div>
		</ShowEmployeesStyle>
	)
}

export default ShowEmployees
