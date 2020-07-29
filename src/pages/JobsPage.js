import React, { useState, useEffect } from 'react'
import TemplatePage from './TemplatePage'
import Editor from '../components/Editor'
import functionService from '../services/functionService'

const Options = ({ options }) => {
	return (
		<>
			{options.map(el => (
				<option key={el} value={el}>
					{el}
				</option>
			))}
		</>
	)
}

export default function JobsPage() {
	const [code, setCode] = useState('')
	const [options, setOptions] = useState(null)

	const handleSubmit = () => {}
	const handleChange = value => {
		setCode(value)
	}

	const hook = () => {
		let keys = []
		const data = functionService.getFunctionsByFiuId()
		for (let key in data.functions) {
			keys.push(key)
		}
		setOptions(keys)
	}
	useEffect(hook, [])

	return (
		<TemplatePage>
			<div className="pkg-box">
				<h1>Run Jobs</h1>
				<div className="w-box">
					<form className="spaced-t">
						<select className="input-select" required>
							{options === null ? (
								<option disabled>Fetching available functions</option>
							) : (
								<>
									<option value="" disabled selected>
										Select a function
									</option>
									<Options options={options} />
								</>
							)}
						</select>
						<Editor onChange={handleChange} name="test-code" placeholder="Enter code here" />
						<button className="btn" onClick={handleSubmit}>
							Start Jobs
						</button>
					</form>
				</div>
			</div>
		</TemplatePage>
	)
}
