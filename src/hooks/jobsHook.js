import functionService from '../services/functionService'

const jobsHook = setJobs => {
	const fetchData = async () => {
		const data = await functionService.getJobsByFiuId()
		if (data !== undefined) {
			let keys = []

			for (let key in data.functions) {
				keys.push(key)
			}
			setJobs(keys)
		}
	}
	fetchData()
}

export default jobsHook
