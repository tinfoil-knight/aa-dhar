import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'

import TemplatePage from './TemplatePage'
import functionService from '../services/functionService'
import Loader from '../components/Loader'

const getTime = time => {
	return moment(time).format('DD-MM-YY, HH:mm:ss')
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
			<Stat title="AA ID: " data={job.aaId} />
			<Stat title="Function ID: " data={job.functionId} />
			<Stat title="Created: " data={getTime(job.created)} />
			<Stat title="Last Updated: " data={getTime(job.lastUpdated)} />
			<Stat title="Current State: " data={job.state} />
			<div>
				<div className="bold">Response</div>
				<div>{job.result}</div>
			</div>
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
