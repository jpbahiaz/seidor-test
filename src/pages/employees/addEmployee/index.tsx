import React, { Dispatch } from 'react'
import AddEmployeeStyle from './style'
import PageHeader from '@/components/pageHeader'
import EmployeeForm from '@/components/employeeForm'
import { TEmployee, EmployeesActions } from '@/redux/modules/employees/types'
import { employeeCreated } from '@/redux/modules/employees/actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { SHOW_EMPLOYEES } from '@/common/urls'

function handleFormDispatch(dispatch: Dispatch<EmployeesActions>, history: { push: Function }) {
	return function dispatcher(employee: TEmployee) {
		dispatch(employeeCreated(employee))
		history.push(SHOW_EMPLOYEES)
	}
}

function AddEmployee() {
	const dispatch = useDispatch()
	const history = useHistory()

	return (
		<AddEmployeeStyle>
			<PageHeader title='Registrar Funcionário'/>
			<EmployeeForm employee={{} as TEmployee} dispatchAction={handleFormDispatch(dispatch, history)}/>
		</AddEmployeeStyle>
	)
}

export default AddEmployee
