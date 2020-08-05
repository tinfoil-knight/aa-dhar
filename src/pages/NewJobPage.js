import React from 'react'
import TemplatePage from '../pages/TemplatePage'
import JobForm from '../components/JobForm'

export default function NewJobPage() {
	return (
		<TemplatePage>
			<div className="pkg-box w-box">
				<JobForm />
			</div>
		</TemplatePage>
	)
}
