import { TEmployeeState, TEmployee, EmployeesActions } from "./types"
import pessoas from '@/assets/json/pessoas.json'

const initialState = {
	// data: [] as TEmployee[]
	data: pessoas.concat(pessoas).concat(pessoas).concat(pessoas).concat(pessoas)
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