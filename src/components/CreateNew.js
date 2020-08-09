import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateNew({ link }) {
	return (
		<Link to={link}>
			<div className="new-box">
				<button className="new-btn">+</button>
				<span className="bold">Create New</span>
			</div>
		</Link>
	)
}
