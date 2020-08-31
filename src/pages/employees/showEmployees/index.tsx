import React, { Dispatch, useEffect } from 'react'
import ShowEmployeesStyle from './style'
import PageHeader from '@/components/pageHeader'
import { useSelector, useDispatch } from 'react-redux'
import { TApplication } from '@/redux/rootReducer'
import { TEmployee, EmployeesActions } from '@/redux/modules/employees/types'
import { Link } from 'react-router-dom'
import { employeeDeleted } from '@/redux/modules/employees/actions'
import { ADD_EMPLOYEE } from '@/common/urls'
import { useWindowSize } from '@/common/hooks'
import { maskCurrency, padEndZeros } from '@/common/masks'

function renderEmployeesRows(employees: TEmployee[], dispatch: Dispatch<EmployeesActions>) {
	return employees.map((employee: TEmployee, index: number) => (
		<tr key={`row-employee-${index}`}>
			<td>{ employee.name }</td>
			<td>{ employee.cpf }</td>
			<td>{ padEndZeros(maskCurrency(`${employee.salary}`)) }</td>
			<td>{ padEndZeros(maskCurrency(`${employee.discount}`)) }</td>
			<td>{ employee.dependents }</td>
			<td>{ padEndZeros(maskCurrency(`${employee.IRRFDiscount}`)) }</td>
			<td className="employee-actions">
				<Link to={`/employees/${employee.id}`}>Editar</Link>
				<button onClick={() => dispatch(employeeDeleted(employee.id))}>Deletar</button>
			</td>
		</tr>
	))
}

function renderEmployeesList(employees: TEmployee[], dispatch: Dispatch<EmployeesActions>) {
	return employees.map((employee: TEmployee, index: number) => (
		<div key={`employee-item-${index}`} className="employee-item">
			<div className="prop name">
				{ employee.name }
			</div>
			<div className="prop">
				<strong>CPF:</strong>
				<span>{ employee.cpf }</span>
			</div>
			<div className="prop">
				<strong>Salário:</strong>
				<span>{ padEndZeros(maskCurrency(`${employee.salary}`)) }</span>
			</div>
			<div className="prop">
				<strong>Desconto da Previdência:</strong>
				<span>{ padEndZeros(maskCurrency(`${employee.discount}`)) }</span>
			</div>
			<div className="prop">
				<strong>Número de Dependentes:</strong>
				<span>{ employee.dependents }</span>
			</div>
			<div className="prop">
				<strong>Desconto IRPF:</strong>
				<span>{ padEndZeros(maskCurrency(`${employee.IRRFDiscount}`)) }</span>
			</div>
			<div className="employee-actions">
				<Link to={`/employees/${employee.id}`}>Editar</Link>
				<button onClick={() => dispatch(employeeDeleted(employee.id))}>Deletar</button>
			</div>
		</div>
	))
}

function ShowEmployees() {
	const employees = useSelector((state: TApplication) => state.employees.allIds
		.map((id: number) => state.employees.byId[id]))
	const dispatch = useDispatch()
	const windowSize = useWindowSize()

	useEffect(() => {
		console.log(windowSize)
	}, [ windowSize ])

	return (
		<ShowEmployeesStyle>
			<PageHeader title='Funcionários'/>
			{ employees && employees.length === 0 && 
				<div className="no-employees">
					<span>Não há nenhum funcionário cadastrado!</span>
					<Link to={ADD_EMPLOYEE}>Cadastre Agora</Link>
				</div>
			}
			{	windowSize.width > 800 &&
				<div className="employees-table">
					<table>
						<thead>
							<tr>
								<th>Nome Completo</th>
								<th>CPF</th>
								<th>Salário (R$)</th>
								<th>Desconto (R$)</th>
								<th>Número de Dependentes</th>
								<th>Desconto IRPF (R$)</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{ renderEmployeesRows(employees, dispatch) }
						</tbody>
					</table>
				</div>
			}
			{
				windowSize.width <= 800 &&
				<div className="employees-list">
					{ renderEmployeesList(employees, dispatch) }
				</div> 
			}
		</ShowEmployeesStyle>
	)
}

export default ShowEmployees
