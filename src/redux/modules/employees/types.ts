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

export type TEmployeeById = {
	[id: number]: TEmployee
}

export type TAllEmployees = number[]

export type TEmployeeCreated = {
	type: string,
	payload: TEmployee
}

export type TEmployeeDeleted = {
	type: string,
	payload: { employeeId: number; }
}

export type TEmployeeUpdated = {
	type: string,
	payload: TEmployee
}

export type EmployeesActions = TEmployeeCreated & TEmployeeUpdated & TEmployeeDeleted
