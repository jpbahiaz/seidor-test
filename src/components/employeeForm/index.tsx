import React, { useEffect } from 'react'
import EmployeeFormStyle from './style'
import { TEmployee } from '@/redux/modules/employees/types'
import { useForm } from 'react-hook-form'

type TEmployeeForm = {
	employee: TEmployee;
	dispatchAction: (employee: TEmployee) => void;
}


function EmployeeForm({ employee, dispatchAction }: TEmployeeForm) {
	const { register, handleSubmit, setValue } = useForm()

	useEffect(() => {
		if (employee) {
			setValue('name', employee.name)
			setValue('cpf', employee.cpf)
			setValue('salary', employee.salary)
			setValue('dependents', employee.dependents)
			setValue('discount', employee.discount)
		}
	}, [ employee ])

	return (
		<EmployeeFormStyle onSubmit={handleSubmit(dispatchAction)}>
			<div className="group">
				<div className="field">
					<label htmlFor="name">Nome</label>
					<input type="text" name="name" ref={register}/>
				</div>
				<div className="field">
					<label htmlFor="cpf">CPF</label>
					<input type="text" name="cpf" ref={register}/>
				</div>
			</div>
			<div className="group">
				<div className="field">
					<label htmlFor="salary">Salário</label>
					<input type="text" name="salary" ref={register}/>
				</div>
				<div className="field">
					<label htmlFor="discount">Desconto da previdência</label>
					<input type="text" name="discount" ref={register}/>
				</div>
				<div className="field">
					<label htmlFor="dependents">Dependentes</label>
					<input type="text" name="dependents" ref={register}/>
				</div>
			</div>
			<button type="submit">Confirmar</button>
		</EmployeeFormStyle>
	)
}

export default EmployeeForm
