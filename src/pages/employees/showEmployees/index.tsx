import React, { Dispatch } from 'react'
import ShowEmployeesStyle from './style'
import PageHeader from '@/components/pageHeader'
import { useSelector, useDispatch } from 'react-redux'
import { TApplication } from '@/redux/rootReducer'
import { TEmployee, EmployeesActions } from '@/redux/modules/employees/types'
import { Link } from 'react-router-dom'
import { employeeDeleted } from '@/redux/modules/employees/actions'

function renderEmployees(employees: TEmployee[], dispatch: Dispatch<EmployeesActions>) {
	return employees.map((employee: TEmployee, index: number) => (
		<tr key={`row-employee-${index}`}>
			<td>{ employee.name }</td>
			<td>{ employee.cpf }</td>
			<td>{ employee.salary }</td>
			<td>{ employee.discount }</td>
			<td>{ employee.dependents }</td>
			<td>{ employee.IRRFDiscount }</td>
			<td className="employee-actions">
				<Link to={`/employees/${employee.id}`}>Editar</Link>
				<button onClick={() => dispatch(employeeDeleted(employee.id))}>Deletar</button>
			</td>
		</tr>
	))
}

function ShowEmployees() {
	const employees = useSelector((state: TApplication) => state.employees.allIds
		.map((id: number) => state.employees.byId[id]))
	const dispatch = useDispatch()

	return (
		<ShowEmployeesStyle>
			<PageHeader title='Funcionários'/>
			<div className="employees-table">
				<table>
					<thead>
						<tr>
							<th>Nome</th>
							<th>CPF</th>
							<th>Salário (R$)</th>
							<th>Desconto (R$)</th>
							<th>Dependentes</th>
							<th>Desconto IRPF (R$)</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{ renderEmployees(employees, dispatch) }
					</tbody>
				</table>
			</div>
		</ShowEmployeesStyle>
	)
}

export default ShowEmployees
