import React from 'react'
import ShowEmployeesStyle from './style'
import PageHeader from '@/components/pageHeader'
import { useSelector } from 'react-redux'
import { TApplication } from '@/redux/rootReducer'
import { TEmployee } from '@/redux/modules/employees/types'
import { Link } from 'react-router-dom'

function renderEmployees(employees: TEmployee[]) {
	return employees.map((employee: TEmployee, index: number) => (
		<tr key={`row-employee-${index}`}>
			<td>{ employee.name }</td>
			<td>{ employee.cpf }</td>
			<td>{ employee.salary }</td>
			<td>{ employee.discount }</td>
			<td>{ employee.dependents }</td>
			<td>{ employee.IRRFDiscount }</td>
			<td className="employee-actions">
				<button>Deletar</button>
				<Link to={`/employees/${employee.id}`}>Editar</Link>
			</td>
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
							<th>Ações</th>
						</tr>
					</thead>
					<tbody>
						{ renderEmployees(employees) }
					</tbody>
				</table>
			</div>
		</ShowEmployeesStyle>
	)
}

export default ShowEmployees
