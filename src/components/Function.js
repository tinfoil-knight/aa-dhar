import React from 'react'
import { Link } from 'react-router-dom'

import getDotColor from '../utilities/dot'
import getFormattedTime from '../utilities/time'

const shortenId = id => {
	return '#' + id.substring(id.length - 12)
}

export default function Function({ functionId, functionName, state, created, lastUpdated }) {
	return (
		<div className="pkg">
			<Link to={`/function/${functionId}`}>
				<div className="spaced-l">
					<span className="bold">{functionName}</span>
					<span>{shortenId(functionId)}</span>
					<span className={getDotColor(state)}></span>
				</div>
				<div className="thin dim spaced-l">
					<span>Last Updated: {getFormattedTime(lastUpdated)}</span>
					<span>Created: {getFormattedTime(created)}</span>
				</div>
			</Link>
			<Link to="/newjob">
				<button className="pkg-test">New Job</button>
			</Link>
		</div>
	)
}
