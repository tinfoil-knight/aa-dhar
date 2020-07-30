import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'

import TemplatePage from './TemplatePage'
import functionService from '../services/functionService'
import Loader from '../components/Loader'

const getTime = timestamp => {
	return moment.unix(timestamp).format('DD-MM-YY, hh:mm:ss a')
}

const Stat = ({ title, data }) => {
	return (
		<div>
			<span className="bold">{title}</span>
			<span>{data}</span>
		</div>
	)
}

const Status = ({ job }) => {
	return (
		<div>
			<h2>Job Details</h2>
			<Stat title="A/C Aggregator ID: " data={job.aaId} />
			<Stat title="Function ID: " data={job.functionId} />
			<Stat title="Created: " data={getTime(job.created)} />
			<Stat title="Current State: " data={job.state} />
		</div>
	)
}

export default function StatusPage() {
	let { id } = useParams()
	const [job, setJob] = useState(null)

	const jobHook = () => {
		const fetchData = async () => {
			const data = await functionService.getJobDetails(id)
			if (data !== undefined) {
				setJob(Object.values(data.jobs)[0])
			}
		}
		fetchData()
	}

	useEffect(jobHook, [])
	return (
		<TemplatePage>
			<div className="pkg-box">
				<h1>Job Status</h1>
				<div className="w-box">
					<div>{job ? <Status job={job} /> : <Loader />}</div>
				</div>
			</div>
		</TemplatePage>
	)
}
