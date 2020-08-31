import {
	calcBaseSalary,
	getDeductionParcelPercentage,
	calcIRRFDiscount,
	generateId
} from '../../src/common/functions'

describe('FUNÇÕES DE CÁLCULO', () => {
	it('Deveria calcular corretamente o salário base', () => {
		expect(calcBaseSalary({
			salary: 0,
			discount: 0,
			dependents: 0
		})).toEqual(0)
		expect(calcBaseSalary({
			salary: 998,
			discount: 74.85,
			dependents: 2
		})).toEqual(594.03)
		expect(calcBaseSalary({
			salary: 1045,
			discount: 78.38,
			dependents: 1
		})).toEqual(802.06)
		expect(calcBaseSalary({
			salary: 5500,
			discount: 628.95,
			dependents: 0
		})).toEqual(4871.05)
		expect(calcBaseSalary({
			salary: 4522,
			discount: 492.03,
			dependents: 3
		})).toEqual(3536.2900000000004)
		expect(calcBaseSalary({
			salary: 10000,
			discount: 713.1,
			dependents: 4
		})).toEqual(8628.66)
	})

	it('Deveria retornar a alíquota e a parcela corretamente baseado no salário', () => {
		expect(getDeductionParcelPercentage(998)).toEqual({ percentage: 0, parcel: 0 })
		expect(getDeductionParcelPercentage(1045)).toEqual({ percentage: 0, parcel: 0 })
		expect(getDeductionParcelPercentage(1998)).toEqual({ percentage: 0.075, parcel: 142.8 })
		expect(getDeductionParcelPercentage(3025)).toEqual({ percentage: 0.15, parcel: 354.8 })
		expect(getDeductionParcelPercentage(5500)).toEqual({ percentage: 0.275, parcel: 869.36 })
		expect(getDeductionParcelPercentage(4522)).toEqual({ percentage: 0.225, parcel: 636.13 })
		expect(getDeductionParcelPercentage(10000)).toEqual({ percentage: 0.275, parcel: 869.36 })
	})

	it('Deveria calcular o IRRF corretamente e retornar 0 caso valor negativo', () => {
		expect(calcIRRFDiscount({
			salary: 5500,
			discount: 628.95,
			dependents: 0
		})).toEqual(470.18)
		expect(calcIRRFDiscount({
			salary: 1999,
			discount: 70,
			dependents: 3
		})).toEqual(0)
		expect(calcIRRFDiscount({
			salary: 10000,
			discount: 713.1,
			dependents: 4
		})).toEqual(1503.52)
	})
})

it('Gerador de ids deve sempre retornar o último id + 1', () => {
	expect(generateId() === generateId()).toBeFalsy()

	const someId = generateId()
	const subsequentId = generateId()
	expect(subsequentId).toEqual(someId + 1)
})