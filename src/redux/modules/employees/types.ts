export type TEmployee = {
	id: number;
	name: string;
	cpf: string;
	salary: number;
	dependents: number;
	discount: number;
	IRRFDiscount: number;
}

export type TEmployeeState = {
	byId: {
		[id: number]: TEmployee
	},
	allIds: number[]
}

type TEmployeeAdded = {
	type: string,
	payload: TEmployee
}

type TEmployeeDeleted = {
	type: string,
	payload: number
}

type TEmployeeUpdated = {
	type: string,
	payload: TEmployee
}

export type EmployeesActions = TEmployeeAdded | TEmployeeUpdated | TEmployeeDeleted
