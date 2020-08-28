function employeesReducer(state: any = [], action: any) {
	switch (action.type) {
		case "GALBA":
			return [
				{
					birl: 'yeah'
				}
			]
		default:
			return state
	}
}

export default employeesReducer