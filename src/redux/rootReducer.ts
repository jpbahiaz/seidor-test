import { combineReducers } from 'redux'
import employeesReducer from './modules/employees/reducer'
import { TEmployeeState } from './modules/employees/types'

export type TApplication = {
	employees: TEmployeeState
}

const rootReducer = combineReducers({
	employees: employeesReducer
})

export default rootReducer
