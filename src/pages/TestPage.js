import React, { useState } from 'react'
import TemplatePage from './TemplatePage'
import Editor from '../components/Editor'

export default function TestPage() {
	const [code, setCode] = useState('')
	const handleSubmit = () => {
		alert(code)
	}
	const handleChange = value => {
		setCode(value)
	}
	return (
		<TemplatePage>
			<div className="pkg-box">
				<h1>Test Package</h1>
				<div className="w-box">
					<form className="spaced-t">
						<div>Test User</div>
						<Editor handleChange={handleChange} />
						<button className="btn" onClick={handleSubmit}>
							Start Test
						</button>
					</form>
				</div>
			</div>
		</TemplatePage>
	)
}
