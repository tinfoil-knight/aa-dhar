import React from 'react'
import { toast } from 'react-toastify'

const getClassName = state => {
	switch (state) {
		case 'AVAILABLE':
			return 'dot available'
		case 'PENDING':
			return 'dot unavailable'
		case 'FAILED':
			return 'dot failed'
		default:
			return 'dot unknown'
	}
}

export default function Function({ functionId, jsonSchema, state, created, lastUpdated }) {
	const handleClick = () => {
		toast.info(`Adding a job for function ${functionId}`)
	}
	return (
		<div className="pkg">
			<div>
				<span className="bold">{functionId}</span>
				<span className={getClassName(state)}></span>
			</div>
			<div className="thin dim spaced-l">
				<span>Last Updated: {lastUpdated}</span>
				<span>Created: {created}</span>
			</div>
			<button className="pkg-test" onClick={handleClick}>
				Run Job
			</button>
		</div>
	)
}
