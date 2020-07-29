import axios from 'axios'
import { toast } from 'react-toastify'

const baseUrl = process.env.REACT_APP_BASE_URL

const getFunctionsByFiuId = () => {
	try {
		console.log('getFunctionsByFiuId')
		console.log(baseUrl + process.env.REACT_APP_FTN_BY_ID)
		// const data = await axios.get(baseUrl + process.env.REACT_APP_FTN_BY_ID)
		const data = {
			fiuId: 'c0a83801-738c-1c50-8173-8cfc75dc0000',
			functions: {
				'00000000-739a-1a9d-8173-9a574ef20000': {
					functionId: '00000000-739a-1a9d-8173-9a574ef20000',
					jsonSchema: {
						$schema: 'json-schema.org/draft-07/schema#',
						$id: 'http://www.some-fiu.com/function.schema.json',
						title: 'Loan Eligibility Schema',
						description: 'Schema to check loan eligibility of an investor',
						type: 'object',
						properties: {
							investorRiskRating: {
								description: 'investor risk rating',
								type: 'string',
								enum: ['high', 'medium', 'low'],
							},
							loanEligible: { description: 'can the investor be given a loan', type: 'boolean' },
						},
						additionalProperties: false,
						required: ['loanEligible', 'investorRiskRating'],
					},
					state: 'PENDING',
					created: '2020-07-29T11:31:19.985+00:00',
					lastUpdated: '2020-07-29T11:31:19.985+00:00',
					functionName: 'runScript',
					handler: 'ABCD',
					runtime: 'XYZ',
				},
				'00000000-739a-1a9d-8173-9a574ef20001': {
					functionId: '00000000-739a-1a9d-8173-9a574ef20001',
					jsonSchema: {
						$schema: 'json-schema.org/draft-07/schema#',
						$id: 'http://www.some-fiu.com/function.schema.json',
						title: 'Loan Eligibility Schema',
						description: 'Schema to check loan eligibility of an investor',
						type: 'object',
						properties: {
							investorRiskRating: {
								description: 'investor risk rating',
								type: 'string',
								enum: ['high', 'medium', 'low'],
							},
							loanEligible: { description: 'can the investor be given a loan', type: 'boolean' },
						},
						additionalProperties: false,
						required: ['loanEligible', 'investorRiskRating'],
					},
					state: 'PENDING',
					created: '2020-07-29T11:31:19.985+00:00',
					lastUpdated: '2020-07-29T11:31:19.985+00:00',
					functionName: 'runScript',
					handler: 'ABCD',
					runtime: 'XYZ',
				},
			},
		}
		console.log(data)
		return data
	} catch (error) {
		toast.error(error.message)
	}
}

const getFunctionDetails = async () => {
	try {
		console.log('getFunctionDetails')
		console.log(baseUrl + process.env.REACT_APP_FTN_DETAILS)
		const data = await axios.get(baseUrl + process.env.REACT_APP_FTN_DETAILS)
		console.log(data)
		return data
	} catch (error) {
		toast.error(error.message)
	}
}

const getJobsByFiuId = async () => {
	try {
		console.log('getJobsByFiuId')
		console.log(baseUrl + process.env.REACT_APP_JOB_BY_ID)
		const data = await axios.get(baseUrl + process.env.REACT_APP_JOB_BY_ID)
		console.log(data)
		return data
	} catch (error) {
		toast.error(error.message)
	}
}

const getJobDetails = async () => {
	try {
		console.log('getJobDetails')
		console.log(baseUrl + process.env.REACT_APP_JOB_DETAILS)
		const data = await axios.get(baseUrl + process.env.REACT_APP_JOB_DETAILS)
		console.log(data)
		return data
	} catch (error) {
		toast.error(error.message)
	}
}

const createFunction = async data => {
	try {
		console.log('createFunction')
		console.log(baseUrl + process.env.REACT_APP_FTN_POST)
		const res = await axios.post(baseUrl + process.env.REACT_APP_FTN_POST, data)
		console.log(res)
		toast.success(res.toString())
	} catch (error) {
		toast.error(error.message)
	}
}

const createJob = async data => {
	try {
		console.log('createJob')
		const res = await axios.post(baseUrl + process.env.REACT_APP_JOB_DETAILS, data)
		console.log(res)
		toast.success(res.toString())
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
