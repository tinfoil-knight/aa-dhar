import Option from './Option'
import React, { useState } from 'react'

export default function SideBar() {
	const optionsTop = ['Functions', 'Jobs']
	const optionsBottom = ['Support', 'Documentation']
	const [selected, setSelected] = useState('Packages')
	return (
		<div className="sidebar">
			<div className="options">
				{optionsTop.map(option => (
					<Option option={option} selected={selected} setSelected={setSelected} key={option} />
				))}
			</div>
			<div className="options">
				{optionsBottom.map(option => (
					<Option option={option} setSelected={setSelected} key={option} />
				))}
			</div>
		</div>
	)
}
