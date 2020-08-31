import React, { useEffect } from 'react'
import EmployeeFormStyle from './style'
import { TEmployee } from '@/redux/modules/employees/types'
import { useForm } from 'react-hook-form'
import { maskCurrency, maskCPF } from '@/common/masks'
import { validate } from 'gerador-validador-cpf'

type TEmployeeForm = {
	employee: TEmployee;
	dispatchAction: (employee: TEmployee) => void;
}


function EmployeeForm({ employee, dispatchAction }: TEmployeeForm) {
	const { register, handleSubmit, setValue, errors } = useForm()

	function sendForm(data: any) {
		dispatchAction({
			...data,
			salary: parseFloat(data.salary.replace(',', '.').replace(/[.,]$/, '')),
			discount: parseFloat(data.discount.replace(',', '.').replace(/[.,]$/, '')),
			dependents: parseInt(data.dependents)
		})
	}

	useEffect(() => {
		if (employee) {
			setValue('name', employee.name)
			setValue('cpf', employee.cpf)
			setValue('salary', employee.salary)
			setValue('dependents', employee.dependents)
			setValue('discount', employee.discount)
		}
	}, [ employee ])

	useEffect(() => {
		console.log(errors)
	}, [ errors ])

	return (
		<EmployeeFormStyle onSubmit={handleSubmit(sendForm)}>
			<div className="group">
				<div className="field">
					<label htmlFor="name">Nome Completo</label>
					<input type="text" name="name" ref={register({
						required: 'Campo obrigatório',
						maxLength: { value: 45, message: 'Nome deve ter menos de 45 caracteres'}
					})}/>
					{ errors.name && <span className="error">{ errors.name.message }</span> }
				</div>
				<div className="field">
					<label htmlFor="cpf">CPF</label>
					<input
						type="text"
						name="cpf"
						ref={register({
							required: 'Campo obrigatório',
							validate: value => validate(value) || 'CPF inválido'
						})}
						onChange={({ target }) => {
							setValue('cpf', maskCPF(target.value))
						}}
					/>
					{ errors.cpf && <span className="error">{ errors.cpf.message }</span> }
				</div>
			</div>
			<div className="group">
				<div className="field">
					<label htmlFor="salary">Salário (R$)</label>
					<input
						type="text"
						name="salary"
						ref={register({
							required: 'Campo obrigatório',
							validate: {
								validNumber: value => !isNaN(parseFloat(value.replace(',', '.'))) || 'Número inválido',
								gtZero: value => parseFloat(value) >= 0 || 'Salário deve ser maior que 0',
							}
						})}
						onChange={({ target }) => { setValue('salary', maskCurrency(target.value)) }}
					/>
					{ errors.salary && <span className="error">{ errors.salary.message }</span> }
				</div>
				<div className="field">
					<label htmlFor="discount">Desconto da previdência (R$)</label>
					<input
						type="text"
						name="discount"
						ref={register({
							required: 'Campo obrigatório',
							validate: {
								validNumber: value => !isNaN(parseFloat(value.replace(',', '.'))) || 'Número inválido',
								gteZero: value => parseFloat(value) >= 0 || 'Desconto deve ser maior ou igual a 0',
							}
						})}
						onChange={({ target }) => { setValue('discount', maskCurrency(target.value)) }}
					/>
					{ errors.discount && <span className="error">{ errors.discount.message }</span> }
				</div>
			</div>
			<div className="group">
				<div className="field">
					<label htmlFor="dependents">Número de dependentes</label>
					<input
						type="text"
						name="dependents"
						ref={register({
							required: 'Campo obrigatório',
							validate: value => parseInt(value) >= 0 || 'Dependentes deve ser maior ou igual a 0'
						})}
						onChange={({ target }) => { setValue('dependents', target.value.replace(/\D/g, '')) }}
					/>
					{ errors.dependents && <span className="error">{ errors.dependents.message }</span> }
				</div>
			</div>
			<button type="submit">Confirmar</button>
		</EmployeeFormStyle>
	)
}

export default EmployeeForm
