import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import functionService from '../services/functionService'

const getClassName = state => {
	switch (state) {
		case 'ACTIVE':
		case 'INACTIVE':
			return 'dot green'
		case 'PENDING':
			return 'dot yellow'
		case 'FAILED':
			return 'dot red'
		default:
			return 'dot grey'
	}
}

const getTime = time => {
	return moment(time).format('DD-MM-YY, HH:mm:ss')
}

const shortenId = id => {
	return '#' + id.substring(id.length - 12)
}

export default function Function({
	functionId,
	functionName,
	jsonSchema,
	state,
	created,
	lastUpdated,
}) {
	return (
		<div className="pkg">
			<div className="spaced-l">
				<span className="bold">{functionName}</span>
				<span>{shortenId(functionId)}</span>
				<span className={getClassName(state)}></span>
			</div>
			<div className="thin dim spaced-l">
				<span>Last Updated: {getTime(lastUpdated)}</span>
				<span>Created: {getTime(created)}</span>
			</div>
			<Link to="/newjob">
				<button className="pkg-test">New Job</button>
			</Link>
		</div>
	)
}
