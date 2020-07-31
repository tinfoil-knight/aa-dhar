import axios from 'axios'
import { toast } from 'react-toastify'
const baseUrl = process.env.REACT_APP_BASE_URL

const getFunctionsByFiuId = async fiuId => {
	console.log('getFunctionsByFiuId')
	const url = baseUrl + process.env.REACT_APP_FTN_BY_ID + fiuId
	console.log(url)
	try {
		const res = await axios.get(url)
		console.log(res)
		return res.data
	} catch (error) {
		toast.error(error.message)
	}
}

const getFunctionDetails = async () => {
	console.log('getFunctionDetails')
	const url = baseUrl + process.env.REACT_APP_FTN_DETAILS
	console.log(url)
	try {
		const res = await axios.get(url)
		console.log(res)
		return res.data
	} catch (error) {
		toast.error(error.message)
	}
}

const getJobsByFiuId = async fiuId => {
	console.log('getJobsByFiuId')
	const url = baseUrl + process.env.REACT_APP_JOB_BY_ID + fiuId
	console.log(url)
	try {
		const res = await axios.get(url)
		console.log(res)
		return res.data
	} catch (error) {
		toast.error(error.message)
	}
}

const getJobDetails = async jobId => {
	console.log('getJobDetails')
	const url = baseUrl + process.env.REACT_APP_JOB_DETAILS + jobId
	console.log(url)
	try {
		const res = await axios.get(url)
		console.log(res)
		return res.data
	} catch (error) {
		toast.error(error.message)
	}
}

const createFunction = async data => {
	console.log('createFunction')
	const url = baseUrl + process.env.REACT_APP_FTN_POST
	console.log(url)
	try {
		const res = await axios.post(url, data)
		console.log(res)
		toast.success(`Function created: ${res.data.functionId}`)
	} catch (error) {
		toast.error(error.message)
	}
}

const createJob = async data => {
	console.log('createJob')
	const url = baseUrl + process.env.REACT_APP_JOB_POST
	console.log(url)
	try {
		const res = await axios.post(url, data)
		console.log(res)
		toast.success(`Job created: ${res.data.jobId}`)
	} catch (error) {
		toast.error(error.message)
	}
}

export default {
	getFunctionsByFiuId: getFunctionsByFiuId,
	getFunctionDetails: getFunctionDetails,
	getJobsByFiuId: getJobsByFiuId,
	getJobDetails: getJobDetails,
	createFunction: createFunction,
	createJob: createJob,
}
