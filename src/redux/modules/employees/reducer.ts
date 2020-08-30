import {
	TEmployee,
	EmployeesActions,
	TEmployeeById,
	TAllEmployees,
	TEmployeeCreated,
	TEmployeeDeleted,
	TEmployeeUpdated,
} from "./types"
import pessoas from '@/assets/json/pessoas.json'
import { EMPLOYEE_CREATED, EMPLOYEE_UPDATED, EMPLOYEE_DELETED } from "./actions"
import { combineReducers } from "redux"
import { generateId } from "@/common/functions"

const mockPeople = pessoas.map((p: TEmployee) => ({ ...p, id: generateId() }))

const initialEmployeesById = mockPeople.reduce((state: TEmployeeById, p: TEmployee) => {
	return { ...state, [p.id]: p }
}, {})
function employeesById(state: TEmployeeById = initialEmployeesById, action: EmployeesActions) {
	switch (action.type) {
		case EMPLOYEE_CREATED:
			return createEmployee(state, action as TEmployeeCreated)

		case EMPLOYEE_UPDATED:
			return updateEmployee(state, action as TEmployeeUpdated)

		case EMPLOYEE_DELETED:
			return deleteEmployee(state, action as TEmployeeDeleted)

		default:
			return state
	}
}

function createEmployee(state: TEmployeeById, action: TEmployeeCreated) {
	const { payload } = action
	
	return {
		...state,
		[payload.id]: payload
	}
}

function updateEmployee(state: TEmployeeById, action: TEmployeeUpdated) {
	const { payload } = action

	return {
		...state,
		[payload.id]: {
			...state[payload.id],
			...payload
		}
	}
}

function deleteEmployee(state: TEmployeeById, action: TEmployeeDeleted) {
	let newEmployeeById = { ...state }
	delete newEmployeeById[action.payload.employeeId]

	return newEmployeeById
}

const initialAllEmployees = mockPeople.map((p: TEmployee) => p.id)
function allEmployees(state: TAllEmployees = initialAllEmployees, action: EmployeesActions) {
	switch (action.type) {
		case EMPLOYEE_CREATED:
			return addEmployeeId(state, action as TEmployeeCreated)

		case EMPLOYEE_DELETED:
			return removeEmployeeId(state, action as TEmployeeDeleted)
	
		default:
			return state
	}
}

function addEmployeeId(state: TAllEmployees, action: TEmployeeCreated){
	return [action.payload.id, ...state]
}

function removeEmployeeId(state: TAllEmployees, action: TEmployeeDeleted){
	return state.filter((id: number) => id != action.payload.employeeId)
}

const employeesReducer = combineReducers({
	byId: employeesById,
	allIds: allEmployees,
})

export default employeesReducer