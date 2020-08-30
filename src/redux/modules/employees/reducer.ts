import { TEmployeeState, TEmployee, EmployeesActions, TEmployeeById, TAllEmployees } from "./types"
import pessoas from '@/assets/json/pessoas.json'
import { EMPLOYEE_CREATED, EMPLOYEE_UPDATED, EMPLOYEE_DELETED } from "./actions"
import { combineReducers } from "redux"

const initialState = pessoas.reduce((initialState: TEmployeeState, pessoa: TEmployee) => {
	return {
		byId: {
			...initialState.byId,
			[pessoa.id]: pessoa
		},
		allIds: [pessoa.id, ...initialState.allIds]
	}
}, {byId: {}, allIds: []})

// function employeesReducer(state: TEmployeeState = initialState, action: EmployeesActions) {
// 	switch (action.type) {
// 		case EMPLOYEE_CREATED:
// 			return {
// 				...state,

// 			}
		
// 		case EMPLOYEE_UPDATED:
// 			return {
// 				...state,
// 			}

// 		case EMPLOYEE_DELETED:
// 			return {
// 				...state,
// 			}
// 		default:
// 			return state
// 	}
// }

const initialEmployeesById = pessoas.reduce((state: TEmployeeById, p: TEmployee) => {
	return { ...state, [p.id]: p }
}, {})
function employeesById(state: TEmployeeById = initialEmployeesById, action: EmployeesActions) {
	switch (action.type) {
		case EMPLOYEE_CREATED:
			return createEmployee(state, action)

		case EMPLOYEE_DELETED:
			return deleteEmployee(state, action)
		default:
			return state
	}
}

function createEmployee(state: TEmployeeById, action: EmployeesActions) {
	const { payload } = action
	
	return {
		...state,
		[payload.id]: payload
	}
}

function deleteEmployee(state: TEmployeeById, action: EmployeesActions) {
	let newEmployeeById = { ...state }
	delete newEmployeeById[action.payload.employeeId]

	return newEmployeeById
}

const initialAllEmployees = pessoas.map((p: TEmployee) => p.id)
function allEmployees(state: TAllEmployees = initialAllEmployees, action: EmployeesActions) {
	switch (action.type) {
		case EMPLOYEE_CREATED:
			return [action.payload.id, ...state]

		case EMPLOYEE_DELETED:
			return state.filter((id: number) => id != action.payload.employeeId)
	
		default:
			return state
	}
}

const employeesReducer = combineReducers({
	byId: employeesById,
	allIds: allEmployees,
})

export default employeesReducer