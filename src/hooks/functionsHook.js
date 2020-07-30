import functionService from '../services/functionService'

const functionsHook = setFunctions => {
	const fetchData = async () => {
		const data = await functionService.getFunctionsByFiuId()
		console.log(data)
		if (data !== undefined) {
			let items = []
			for (let key in data.functions) {
				let item = data.functions[key]
				items.push(item)
			}
			setFunctions(items)
		}
	}
	fetchData()
}

export default functionsHook
