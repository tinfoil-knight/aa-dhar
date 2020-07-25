import React from 'react'
import TemplatePage from './TemplatePage'
import Editor from '../components/Editor'

export default function TestPage() {
	return (
		<TemplatePage>
			<div className="pkg-box">
				<h1>Test Package</h1>
				<div className="w-box">
					<form className="spaced-t">
						<div>Test User</div>
						<Editor />
						<button className="test-start-btn">Start Test</button>
					</form>
				</div>
			</div>
		</TemplatePage>
	)
}
