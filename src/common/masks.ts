export function maskCurrency(string: string) {
	let result = string.replace(/(?![.,])\D/g, '')
	result = result.replace(/^0+,?(0+)?/, '0')
	result = result.replace(/^0(\d+)/, '$1')
	const matchDots = result.match(/[.,]/g)
	if (matchDots && matchDots.length > 1){
		for(let i = 0; i < matchDots.length - 1; i++){
			result = result.replace(/[.,]/, '')
		}
	}

	result = result.replace(/^(\d+,\d{2})\d+/, '$1')

	return result.replace('.', ',')
}

export function maskCPF(cpf: string) {
	let result = cpf.replace(/\D/g, '')
	result = result.replace(/(\d{11}).*/, '$1')
	result = result.replace(/^(\d{3}[.]?)(\d{3}[.]?)(\d{3}-?)(\d{2})$/, '$1.$2.$3-$4')

	return result
}