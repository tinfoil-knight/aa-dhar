import React from 'react'

export default function Package({ id, title, details, time, version }) {
	return (
		<div className="pkg">
			<div className="spaced">
				<span className="bold">{title}</span>
				<span className="thin">#{id}</span>
			</div>
			<div className="buttonght">{details}</div>
			<div className="thin dim spaced-l">
				<span>every {time} weeks per user</span>
				<span>v{version}</span>
			</div>
			<button className="pkg-test">Test</button>
		</div>
	)
}
