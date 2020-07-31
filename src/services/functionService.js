import axios from 'axios'
import { toast } from 'react-toastify'
const baseUrl = process.env.REACT_APP_BASE_URL

const getFunctionsByFiuId = async fiuId => {
	try {
		console.log('getFunctionsByFiuId')
		const url = baseUrl + process.env.REACT_APP_FTN_BY_ID + fiuId
		console.log(url)
		const res = await axios.get(url)
		console.log(res)
		return res.data
	} catch (error) {
		toast.error(error.message)
	}
}

const getFunctionDetails = async () => {
	try {
		console.log('getFunctionDetails')
		const url = baseUrl + process.env.REACT_APP_FTN_DETAILS
		console.log(url)
		const res = await axios.get(url)
		console.log(res)
		return res.data
	} catch (error) {
		toast.error(error.message)
	}
}

const getJobsByFiuId = async fiuId => {
	try {
		console.log('getJobsByFiuId')
		const url = baseUrl + process.env.REACT_APP_JOB_BY_ID + fiuId
		console.log(url)
		const res = await axios.get(url)
		console.log(res)
		return res.data
	} catch (error) {
		toast.error(error.message)
	}
}

const getJobDetails = async jobId => {
	try {
		console.log('getJobDetails')
		const url = baseUrl + process.env.REACT_APP_JOB_DETAILS + jobId
		console.log(url)
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
		toast.success(res.toString())
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
		toast.success('Job created: ', res.data.jobId)
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

// const data = {
// 	fiuId: 'c0a83801-738c-1c50-8173-8cfc75dc0000',
// 	functions: {
// 		'00000000-739a-1a9d-8173-9a574ef20000': {
// 			functionId: '00000000-739a-1a9d-8173-9a574ef20000',
// 			jsonSchema: {
// 				$schema: 'json-schema.org/draft-07/schema#',
// 				$id: 'http://www.some-fiu.com/function.schema.json',
// 				title: 'Loan Eligibility Schema',
// 				description: 'Schema to check loan eligibility of an investor',
// 				type: 'object',
// 				properties: {
// 					investorRiskRating: {
// 						description: 'investor risk rating',
// 						type: 'string',
// 						enum: ['high', 'medium', 'low'],
// 					},
// 					loanEligible: { description: 'can the investor be given a loan', type: 'boolean' },
// 				},
// 				additionalProperties: false,
// 				required: ['loanEligible', 'investorRiskRating'],
// 			},
// 			state: 'PENDING',
// 			created: '2020-07-29T11:31:19.985+00:00',
// 			lastUpdated: '2020-07-29T11:31:19.985+00:00',
// 			functionName: 'runScript',
// 			handler: 'ABCD',
// 			runtime: 'XYZ',
// 		},
// 		'00000000-739a-1a9d-8173-9a574ef20001': {
// 			functionId: '00000000-739a-1a9d-8173-9a574ef20001',
// 			jsonSchema: {
// 				$schema: 'json-schema.org/draft-07/schema#',
// 				$id: 'http://www.some-fiu.com/function.schema.json',
// 				title: 'Loan Eligibility Schema',
// 				description: 'Schema to check loan eligibility of an investor',
// 				type: 'object',
// 				properties: {
// 					investorRiskRating: {
// 						description: 'investor risk rating',
// 						type: 'string',
// 						enum: ['high', 'medium', 'low'],
// 					},
// 					loanEligible: { description: 'can the investor be given a loan', type: 'boolean' },
// 				},
// 				additionalProperties: false,
// 				required: ['loanEligible', 'investorRiskRating'],
// 			},
// 			state: 'PENDING',
// 			created: '2020-07-29T11:31:19.985+00:00',
// 			lastUpdated: '2020-07-29T11:31:19.985+00:00',
// 			functionName: 'runScript',
// 			handler: 'ABCD',
// 			runtime: 'XYZ',
// 		},
// 	},
// }
