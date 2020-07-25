import React from 'react'
import { Link } from 'react-router-dom'

function getClassName(selected, option) {
	console.log(option, selected)
	if (selected === option) {
		return 'option selected'
	}
	return 'option'
}

export default function Option({ selected, option, setSelected }) {
	return (
		<button
			className={getClassName(selected, option)}
			key={option}
			onClick={e => setSelected(e.currentTarget.innerText)}
		>
			<Link to={'/' + option.toLowerCase()}>{option}</Link>
		</button>
	)
}
