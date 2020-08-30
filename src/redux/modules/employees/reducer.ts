import { TEmployeeState, TEmployee, EmployeesActions } from "./types"
import pessoas from '@/assets/json/pessoas.json'
import { EMPLOYEE_CREATED, EMPLOYEE_UPDATED, EMPLOYEE_DELETED } from "./actions"

const initialState = pessoas.reduce((initialState: TEmployeeState, pessoa: TEmployee) => {
	return {
		byId: {
			...initialState.byId,
			[pessoa.id]: pessoa
		},
		allIds: [pessoa.id, ...initialState.allIds]
	}
}, {byId: {}, allIds: []})

function employeesReducer(state: TEmployeeState = initialState, action: EmployeesActions) {
	switch (action.type) {
		case EMPLOYEE_CREATED:
			return {
				...state,
			}
		
		case EMPLOYEE_UPDATED:
			return {
				...state,
			}

		case EMPLOYEE_DELETED:
			return {
				...state,
			}
		default:
			return state
	}
}

export default employeesReducer