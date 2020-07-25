import React from 'react'
import TemplatePage from './TemplatePage'
import Package from '../components/Package'
import CreateNew from '../components/CreateNew'

export default function PackagePage() {
	const data = [
		{
			id: 132,
			title: 'Analyze Risk Profile',
			details: "Compute the risk profile of user's Mutual Fund investments.",
			time: 3,
			version: '1.0.52',
		},
		{
			id: 133,
			title: 'Analyze Risk Profile',
			details: "Compute the risk profile of user's Mutual Fund investments.",
			time: 3,
			version: '1.0.52',
		},
	]
	return (
		<TemplatePage>
			<div className="pkg-box">
				<h1>My Packages</h1>
				{data.map(el => (
					<Package
						id={el.id}
						title={el.title}
						details={el.details}
						time={el.time}
						version={el.version}
						key={el.id}
					/>
				))}
				<CreateNew />
			</div>
		</TemplatePage>
	)
}
