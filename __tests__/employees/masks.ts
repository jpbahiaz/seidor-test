import {
	maskCurrency, maskCPF
} from '../../src/common/masks'

describe('MÁSCARAS', () => {
	describe('MOEDA', () => {
		it('Deveria permitir somente uma vírgula', () => {
			expect(maskCurrency('100.000.412,5')).toEqual('100000412,5')
		})
		it('Deveria permitir somente duas casas após a vírgula', () => {
			expect(maskCurrency('452,542312')).toEqual('452,54')
		})
		it('Deveria remover zeros repetidos no início dos números', () => {
			expect(maskCurrency('00000')).toEqual('0')
			expect(maskCurrency('00000412')).toEqual('412')
			expect(maskCurrency('00000410302002')).toEqual('410302002')
		})
		it('Deveria substituir ponto por vírgula', () => {
			expect(maskCurrency('1134.67')).toEqual('1134,67')
		})
	})

	describe('CPF', () => {
		it('Deveria adicionar pontos e o traço', () => {
			expect(maskCPF('10736445787')).toEqual('107.364.457-87')
		})
		it('Deveria previnir cpfs com mais de 11 dígitos', () => {
			expect(maskCPF('107.364.457-8766')).toEqual('107.364.457-87')
		})
		it('Deveria remover quaisquer outros caracteres', () => {
			expect(maskCPF('107afadk364>{}457#@87')).toEqual('107.364.457-87')
		})
	})
})