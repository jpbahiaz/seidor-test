import { TEmployee } from "@/redux/modules/employees/types"

const DEPENDENT_DEDUCTION = 164.56

export const generateId = (function (){
	let currentId = 0

	return function generator(){
		return ++currentId
	}
})()

export function getDeductionParcelPercentage(salary: number): TParcelPercentage {
	let result
	if (salary < 1903.98)
		result = { percentage: 1, parcel: 0 }
	else if (salary > 1903.98 && salary < 2826.65)
		result = { percentage: 1.075, parcel: 142.8 }
	else if (salary > 2826.65 && salary < 3751.05)
		result = { percentage: 1.15, parcel: 354.8 }
	else if (salary > 3751.05 && salary < 4664.68)
		result = { percentage: 1.225, parcel: 636.13 }
	else
		result = { percentage: 1.275, parcel: 869.36 }

	return result
}

export function calcBaseSalary(employee: TEmployee) {
	const dependentDeduction = DEPENDENT_DEDUCTION * employee.dependents
	
	return employee.salary - employee.discount - dependentDeduction
}

export function calcDescontIRRF(baseSalary: number, parcelPercentage: TParcelPercentage) {
	return (baseSalary * parcelPercentage.percentage) - parcelPercentage.parcel
}