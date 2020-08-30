import React, { Dispatch } from 'react'
import AddEmployeeStyle from './style'
import PageHeader from '@/components/pageHeader'
import EmployeeForm from '@/components/employeeForm'
import { TEmployee, EmployeesActions } from '@/redux/modules/employees/types'
import { addEmployee } from '@/redux/modules/employees/actions'
import { useDispatch } from 'react-redux'

function handleFormDispatch(dispatch: Dispatch<EmployeesActions>) {
	return function dispatcher(employee: TEmployee) {
		dispatch(addEmployee(employee))
	}
}

function AddEmployee() {
	const dispatch = useDispatch()

	return (
		<AddEmployeeStyle>
			<PageHeader title='Registrar Funcionário'/>
			<EmployeeForm employee={{} as TEmployee} dispatchAction={handleFormDispatch(dispatch)}/>
		</AddEmployeeStyle>
	)
}

export default AddEmployee
