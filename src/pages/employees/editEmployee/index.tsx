import React, { Dispatch, useEffect } from 'react'
import EditEmployeeStyle from './style'
import PageHeader from '@/components/pageHeader'
import EmployeeForm from '@/components/employeeForm'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { TEmployee, EmployeesActions } from '@/redux/modules/employees/types'
import { employeeUpdated } from '@/redux/modules/employees/actions'
import { TApplication } from '@/redux/rootReducer'

function handleFormDispatch(dispatch: Dispatch<EmployeesActions>) {
	return function dispatcher(employee: TEmployee) {
		dispatch(employeeUpdated(employee))
	}
}

function EditEmployee() {
	const { id } = useParams()
	const dispatch = useDispatch()
	const employee = useSelector((state: TApplication) => state.employees.byId[id])

	useEffect(() => {
		console.log(employee)
	}, [ employee ])

	return (
		<EditEmployeeStyle>
			<PageHeader title='Eidtar Funcionário'/>
			<EmployeeForm employee={employee} dispatchAction={handleFormDispatch(dispatch)}/>
		</EditEmployeeStyle>
	)
}

export default EditEmployee
