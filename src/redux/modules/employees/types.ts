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
	data: TEmployee[]
}

type TEmployeeAdded = {
	type: string,
	payload: TEmployee
}

type TEmployeeUpdated = {
	type: string,
	payload: TEmployee
}

export type EmployeesActions = TEmployeeAdded | TEmployeeUpdated
