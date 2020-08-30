import { TEmployee } from "./types"

export const EMPLOYEE_CREATED = 'EMPLOYEE_CREATED'
export const EMPLOYEE_UPDATED = 'EMPLOYEE_UPDATED'
export const EMPLOYEE_DELETED = 'EMPLOYEE_DELETED'

export function addEmployee(employee: TEmployee) {
	return {
		type: EMPLOYEE_CREATED,
		payload: employee
	}
}

export function updateEmployee(employee: TEmployee) {
	return {
		type: EMPLOYEE_UPDATED,
		payload: employee
	}
}