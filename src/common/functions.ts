export const generateId = (function (){
	let currentId = 0

	return function generator(){
		return ++currentId
	}
})()