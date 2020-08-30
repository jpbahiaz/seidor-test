import { TEmployee, EmployeesActions } from "./types"

export const EMPLOYEE_CREATED = 'EMPLOYEE_CREATED'
export const EMPLOYEE_UPDATED = 'EMPLOYEE_UPDATED'
export const EMPLOYEE_DELETED = 'EMPLOYEE_DELETED'

export function employeeCreated(employee: TEmployee): EmployeesActions {
	return {
		type: EMPLOYEE_CREATED,
		payload: employee
	}
}

export function employeeUpdated(employee: TEmployee): EmployeesActions {
	return {
		type: EMPLOYEE_UPDATED,
		payload: employee
	}
}

export function employeeDeleted(id: number): EmployeesActions {
	return {
		type: EMPLOYEE_DELETED,
		payload: { employeeId: id }
	}
}