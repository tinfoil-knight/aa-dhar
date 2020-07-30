import React from 'react'
import { useFormik } from 'formik'
import Editor from './Editor'
import functionService from '../services/functionService'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

export default function Form() {
	const fiuId = useSelector(state => state.id)
	const formik = useFormik({
		initialValues: {
			functionName: '',
			jsonSchema: '',
			handler: '',
			runtime: '',
		},
		onSubmit: values => {
			let file = document.querySelector('#function').files[0]
			let newValues = { ...values, fiuId }
			const blob = new Blob([JSON.stringify(newValues)], {
				type: 'application/json',
			})
			const data = new FormData()
			data.append('document', blob)
			data.append('file', file)
			functionService.createFunction(data)
			toast.info('Function submitted, wait for some time')
		},
	})
	const runTimes = [
		'nodejs',
		'nodejs4.3',
		'nodejs6.10',
		'nodejs8.10',
		'nodejs10.x',
		'nodejs12.x',
		'java8',
		'java11',
		'python2.7',
		'python3.6',
		'python3.7',
		'python3.8',
		'nodejs4.3-edge',
		'go1.x',
		'ruby2.5',
		'ruby2.7',
	]
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
			<input
				id="handler"
				name="handler"
				className="input-text"
				type="text"
				placeholder="Handler"
				onChange={formik.handleChange}
				value={formik.values.handler}
				autoComplete="off"
				required
			/>
			<select
				id="runtime"
				name="runtime"
				className="input-text"
				type="text"
				onChange={formik.handleChange}
				value={formik.values.runtime}
				required
			>
				<option value="" disabled>
					Select a runtime
				</option>
				{runTimes.map(el => (
					<option key={el}>{el}</option>
				))}
			</select>
			<input id="function" name="function" type="file" required />
			<button type="submit" className="btn">
				Submit
			</button>
		</form>
	)
}
