export function maskCurrency(string: string) {
	let result
	const onlyNumbersAndDots = string.replace(/(?![.,])\D/g, '')
	const matchDots = onlyNumbersAndDots.match(/[.,]/g)
	if (matchDots && matchDots.length > 1){
		result = onlyNumbersAndDots.replace(/[.,]/, '')
	} else {
		result = onlyNumbersAndDots
	}

	return result.replace(',', '.')
}