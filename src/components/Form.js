import React from 'react'
import { useFormik } from 'formik'
import Editor from './Editor'
import functionService from '../services/functionService'

export default function Form() {
	const formik = useFormik({
		initialValues: {
			functionName: '',
			jsonSchema: '',
		},
		onSubmit: values => {
			let file = document.querySelector('#function').files[0]
			const blob = new Blob([JSON.stringify(values)], {
				type: 'application/json',
			})
			const data = new FormData()
			data.append('document', blob)
			data.append('file', file)
			functionService.createFunction(data)
		},
	})
	return (
		<form onSubmit={formik.handleSubmit} className="spaced-t">
			<input
				id="functionName"
				name="functionName"
				className="input-text"
				type="text"
				placeholder="Function Name"
				onChange={formik.handleChange}
				value={formik.values.functionName}
				autoComplete="off"
				required
			/>
			<Editor
				id="jsonSchema"
				name="jsonSchema"
				placeholder="Enter your JSON Schema here"
				onChange={formik.handleChange}
				value={formik.values.jsonSchema}
				required
			/>
			<input id="function" name="function" type="file" required />
			<button type="submit" className="btn">
				Submit
			</button>
		</form>
	)
}
