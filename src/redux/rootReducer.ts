import { combineReducers } from 'redux'
import employeesReducer from './modules/employees/reducer'

const rootReducer = combineReducers({
	employees: employeesReducer
})

export default rootReducer
