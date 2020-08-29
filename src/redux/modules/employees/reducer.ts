import { TEmployeeState, TEmployee, EmployeesActions } from "./types"
import pessoas from '@/static/pessoas.json'

const initialState = {
	// data: [] as TEmployee[]
	data: pessoas as TEmployee[]
} as TEmployeeState

function employeesReducer(state: TEmployeeState = initialState, action: EmployeesActions) {
	switch (action.type) {
		case "GALBA":
			return {
				birl: 'yeah'
			}
		default:
			return state
	}
}

export default employeesReducer