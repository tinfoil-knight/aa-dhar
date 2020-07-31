import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'

import TemplatePage from './TemplatePage'
import Editor from '../components/Editor'
import functionService from '../services/functionService'
import { toast } from 'react-toastify'

const Functions = ({ options }) => {
	return (
		<>
			{options.map(el => (
				<option key={el.functionId} value={el.functionId}>
					{el.functionName + ':' + el.functionId}
				</option>
			))}
		</>
	)
}

const Job = ({ job }) => {
	return (
		<Link to={`/job/${job.jobId}`}>
			<div className="job-list-el">{job.jobId}</div>
		</Link>
	)
}

const Jobs = ({ jobs }) => {
	return (
		<>
			<div>Click on a job to see its details and current status.</div>
			<div className="scrollable">
				{jobs.map(job => (
					<Job job={job} key={job.jobId} />
				))}
			</div>
		</>
	)
}

export default function JobsPage() {
	const fiuId = useSelector(state => state.id)
	const [functions, setFunctions] = useState(null)
	const [jobs, setJobs] = useState(null)

	const formik = useFormik({
		initialValues: {
			aaId: '',
			functionId: '',
			requestParams: '',
		},
		onSubmit: values => {
			var formdata = new FormData()

			formdata.append('fiuId', fiuId)
			formdata.append('aaId', values.aaId)
			formdata.append('functionId', values.functionId)
			formdata.append('requestParams', values.requestParams)

			functionService.createJob(formdata)
			toast.info('Job submitted, wait for some time')
		},
	})

	const functionsHook = () => {
		const fetchData = async () => {
			const data = await functionService.getFunctionsByFiuId(fiuId)
			if (data !== undefined) {
				let items = []
				for (let key in data.functions) {
					let item = data.functions[key]
					item['functionId'] = key
					items.push(item)
				}
				setFunctions(items)
			}
		}
		fetchData()
	}

	const jobsHook = () => {
		const fetchData = async () => {
			const data = await functionService.getJobsByFiuId(fiuId)

			if (data !== undefined) {
				let values = []
				for (let key in data.jobs) {
					values.push(data.jobs[key])
				}
				setJobs(values)
			}
		}
		fetchData()
	}

	useEffect(jobsHook, [])
	useEffect(functionsHook, [])

	return (
		<TemplatePage>
			<div className="pkg-box">
				<section>
					<h1>Currently Running</h1>
					<div className="w-box">{jobs ? <Jobs jobs={jobs} /> : 'No jobs running'}</div>
				</section>
				<section>
					<h1>Run New Job</h1>
					<div className="w-box">
						<form className="spaced-t" onSubmit={formik.handleSubmit}>
							<select
								name="functionId"
								value={formik.values.functionId}
								onChange={formik.handleChange}
								className="input-select"
								required
							>
								{functions === null ? (
									<option disabled>Fetching available functions</option>
								) : (
									<>
										<option value="" disabled selected>
											Select a function
										</option>
										<Functions options={functions} />
									</>
								)}
							</select>
							<input
								type="text"
								name="aaId"
								id="aaId"
								placeholder="AA Id"
								value={formik.aaId}
								onChange={formik.handleChange}
								className="input-text"
								required
							/>
							<Editor
								name="requestParams"
								value={formik.values.requestParams}
								onChange={formik.handleChange}
								placeholder="Enter Request Parameters here"
							/>
							<button className="btn" type="submit">
								Start Job
							</button>
						</form>
					</div>
				</section>
			</div>
		</TemplatePage>
	)
}
