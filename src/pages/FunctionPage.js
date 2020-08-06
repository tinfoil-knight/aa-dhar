import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

import functionService from '../services/functionService'
import TemplatePage from './TemplatePage'
import Loader from '../components/Loader'

import getDotColor from '../utilities/dot'
import getFormattedTime from '../utilities/time'

const shortenId = id => {
	return '#' + id.substring(id.length - 12)
}

const JobListElement = ({ job }) => {
	return (
		<Link to={`/job/${job.jobId}`}>
			<div className="spaced-l">
				<span>{getFormattedTime(job.lastUpdated)}</span>
				<span className={getDotColor(job.state)}></span>
				<span>{job.functionName}</span>
				<span>{job.aaId}</span>
				<span>{shortenId(job.jobId)}</span>
			</div>
		</Link>
	)
}

const Collapsible = props => {
	const [open, toggleOpen] = useState(false)
	return (
		<div>
			<button type="button" className="col-btn" onClick={() => toggleOpen(open => !open)}>
				{props.title}
				{open ? <BsChevronUp /> : <BsChevronDown />}
			</button>
			{open ? <div className="col-con">{props.children}</div> : null}
		</div>
	)
}

const prettyJSON = json => {
	const parsedResult = JSON.parse(json)
	return JSON.stringify(parsedResult, undefined, 2)
}

const Details = ({ ftn }) => {
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
		<div className="spaced-t">
			<h1>{ftn.functionName}</h1>
			<div className="details spaced-l">
				<div className="w-box ftndet spaced-t">
					<div className="status">
						<span>Status</span>
						<span className={getDotColor(ftn.state)}></span>
					</div>
					<Collapsible title="Runtime">{ftn.runtime}</Collapsible>
					<Collapsible title="Updated">{getFormattedTime(ftn.lastUpdated)}</Collapsible>
					<Collapsible title="Created">{getFormattedTime(ftn.created)}</Collapsible>
				</div>
				<div className="w-box ftnschema">
					<h3>Schema</h3>
					<pre>
						<code>{prettyJSON(ftn.jsonSchema)}</code>
					</pre>
				</div>
			</div>
			<div className="w-box">
				<h3>Recent Jobs</h3>
				{jobs ? (
					jobs
						.filter(job => job.functionId === ftn.functionId)
						.map(job => <JobListElement key={job.jobId} job={job} />)
				) : (
					<Loader />
				)}
			</div>
		</div>
	)
}

export default function FunctionPage() {
	let { id } = useParams()
	const [ftn, setFunction] = useState(null)
	const functionHook = () => {
		const fetchData = async () => {
			const data = await functionService.getFunctionDetails(id)
			if (data !== undefined) {
				setFunction(Object.values(data.functions)[0])
			}
		}
		fetchData()
	}

	useEffect(functionHook, [])
	return (
		<TemplatePage>
			<div className="pkg-box">{ftn ? <Details ftn={ftn} /> : <Loader />}</div>
		</TemplatePage>
	)
}
