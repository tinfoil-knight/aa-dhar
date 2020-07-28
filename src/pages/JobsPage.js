import React, { useState, useEffect } from 'react'
import TemplatePage from './TemplatePage'
import Editor from '../components/Editor'
import axios from 'axios'
import { toast } from 'react-toastify'

const Options = options => {
	return options.map()
}

export default function JobsPage() {
	const [code, setCode] = useState('')
	const [options, setOptions] = useState(null)
	const [error, setError] = useState(null)
	const handleSubmit = () => {
		alert(code)
	}
	const handleChange = value => {
		setCode(value)
	}
	const optionsHook = () => {
		axios
			.get(process.env.REACT_APP_FTN_BY_ID)
			.then(res => setOptions(Object.keys(res.functions)))
			.catch(err => setError(err.message))
	}
	const errorHook = () => {
		if (error !== null) {
			toast.error(error)
		}
	}
	useEffect(optionsHook, [options])
	useEffect(errorHook, [error])
	return (
		<TemplatePage>
			<div className="pkg-box">
				<h1>Run Jobs</h1>
				<div className="w-box">
					<form className="spaced-t">
						<select className="input-select">
							{options === null ? (
								<option disable>Fetching available functions</option>
							) : (
								<Options options={options} />
							)}
						</select>
						<Editor
							onChange={handleChange}
							name="test-code"
							placeholder="Enter code here"
						/>
						<button className="btn" onClick={handleSubmit}>
							Start Jobs
						</button>
					</form>
				</div>
			</div>
		</TemplatePage>
	)
}
