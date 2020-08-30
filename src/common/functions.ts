import { TEmployee } from "@/redux/modules/employees/types"
import { TParcelPercentage } from "./types"

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
		result = { percentage: 0, parcel: 0 }
	else if (salary > 1903.98 && salary < 2826.65)
		result = { percentage: 0.075, parcel: 142.8 }
	else if (salary > 2826.65 && salary < 3751.05)
		result = { percentage: 0.15, parcel: 354.8 }
	else if (salary > 3751.05 && salary < 4664.68)
		result = { percentage: 0.225, parcel: 636.13 }
	else
		result = { percentage: 0.275, parcel: 869.36 }

	return result
}

export function calcBaseSalary(employee: TEmployee): number {
	const dependentDeduction = DEPENDENT_DEDUCTION * employee.dependents
	
	return employee.salary - employee.discount - dependentDeduction
}

export function calcIRRFDiscount(employee: TEmployee): number {
	const baseSalary = calcBaseSalary(employee)
	const parcelPercentage = getDeductionParcelPercentage(employee.salary)
	const baseSalaryIncremented = baseSalary * parcelPercentage.percentage
	const incrementedSalaryDiscounted = baseSalaryIncremented - parcelPercentage.parcel
	const result = parseFloat(incrementedSalaryDiscounted.toFixed(2))
	return result > 0 ? result : 0 
}