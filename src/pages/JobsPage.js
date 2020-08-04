import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'

import TemplatePage from './TemplatePage'

import Table from '../components/Table'
import functionService from '../services/functionService'

export default function JobsPage() {
	const fiuId = useSelector(state => state.id)

	const [jobs, setJobs] = useState(null)

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

	return (
		<TemplatePage>
			<div className="pkg-box">
				<h1>Jobs List</h1>
				<div className="w-box rounded center">{jobs ? <Table jobs={jobs} /> : 'No jobs running'}</div>
			</div>
		</TemplatePage>
	)
}
