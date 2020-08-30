import React, { Dispatch, useEffect } from 'react'
import EditEmployeeStyle from './style'
import PageHeader from '@/components/pageHeader'
import EmployeeForm from '@/components/employeeForm'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { TEmployee, EmployeesActions } from '@/redux/modules/employees/types'
import { employeeUpdated } from '@/redux/modules/employees/actions'
import { TApplication } from '@/redux/rootReducer'
import { SHOW_EMPLOYEES } from '@/common/urls'

function handleFormDispatch(dispatch: Dispatch<EmployeesActions>, currentEmployee: TEmployee, history: { push: Function}) {
	return function dispatcher(employee: TEmployee) {
		dispatch(employeeUpdated({...currentEmployee, ...employee}))
		history.push(SHOW_EMPLOYEES)
	}
}

function EditEmployee() {
	const { id } = useParams()
	const dispatch = useDispatch()
	const history = useHistory()
	const employee = useSelector((state: TApplication) => state.employees.byId[id])

	useEffect(() => {
		console.log(employee)
	}, [ employee ])

	return (
		<EditEmployeeStyle>
			<PageHeader title='Eidtar Funcionário'/>
			<EmployeeForm employee={employee} dispatchAction={handleFormDispatch(dispatch, employee, history)}/>
		</EditEmployeeStyle>
	)
}

export default EditEmployee
