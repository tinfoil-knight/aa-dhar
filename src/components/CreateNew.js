import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateNew() {
	return (
		<Link to="/new">
			<div className="new-box">
				<button className="new-btn">+</button>
				<span className="bold">Create New</span>
			</div>
		</Link>
	)
}
