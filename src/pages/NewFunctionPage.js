import React from 'react'
import TemplatePage from './TemplatePage'
import Form from '../components/Form'

export default function NewFunctionPage() {
	return (
		<TemplatePage>
			<div className="pkg-box">
				<h1>Create new function</h1>
				<div className="w-box">
					<Form />
				</div>
			</div>
		</TemplatePage>
	)
}
