export type TEmployee = {
	id: number;
	name: string;
	cpf: string;
	salary: number;
	dependents: number;
	discount: number;
}

export type TEmployeeState = {
	data: TEmployee[]
}

type TSetEmployee = {
	type: string,
	payload: TEmployee
}

export type EmployeesActions = TSetEmployee
