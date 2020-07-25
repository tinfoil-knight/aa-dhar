import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function getClassName(path, option) {
	if (path === '/' + option.toLowerCase()) {
		return 'option selected'
	}
	return 'option'
}

export default function Option({ option }) {
	let location = useLocation()
	return (
		<Link to={'/' + option.toLowerCase()}>
			<button className={getClassName(location.pathname, option)} key={option}>
				{option}
			</button>
		</Link>
	)
}
