import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function getClassName(path, option) {
	if (path === option.toLowerCase()) {
		return 'option selected'
	}
	return 'option'
}

export default function Option({ option, setSelected }) {
	let location = useLocation()
	const handleClick = e => {
		console.log(e.currentTarget.innerText)
	}
	return (
		<Link to={'/' + option.toLowerCase()}>
			<button
				className={getClassName(location.pathname, option)}
				key={option}
				onClick={handleClick}
			>
				{option}
			</button>
		</Link>
	)
}
