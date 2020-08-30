import { TEmployee, TEmployeeCreated, TEmployeeUpdated, TEmployeeDeleted } from "./types"

export const EMPLOYEE_CREATED = 'EMPLOYEE_CREATED'
export const EMPLOYEE_UPDATED = 'EMPLOYEE_UPDATED'
export const EMPLOYEE_DELETED = 'EMPLOYEE_DELETED'

export function employeeCreated(employee: TEmployee): TEmployeeCreated {
	return {
		type: EMPLOYEE_CREATED,
		payload: employee
	}
}

export function employeeUpdated(employee: TEmployee): TEmployeeUpdated {
	return {
		type: EMPLOYEE_UPDATED,
		payload: employee
	}
}

export function employeeDeleted(id: number): TEmployeeDeleted {
	return {
		type: EMPLOYEE_DELETED,
		payload: { employeeId: id }
	}
}