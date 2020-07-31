import React, { useState } from 'react'
import { useFormik } from 'formik'
import Editor from './Editor'
import functionService from '../services/functionService'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

export default function Form() {
	const [code, setCode] = useState('')
	const handleCodeChange = newValue => {
		setCode(newValue)
	}
	const fiuId = useSelector(state => state.id)
	const formik = useFormik({
		initialValues: {
			functionName: '',
			handler: '',
			runtime: '',
		},
		onSubmit: values => {
			let file = document.querySelector('#function').files[0]
			var formdata = new FormData()
			formdata.append('function', file, 'binary-input.zip')
			formdata.append('fiuId', fiuId)
			formdata.append('handler', values.handler)
			formdata.append('runtime', values.runtime)
			formdata.append('functionName', values.functionName)
			formdata.append('jsonSchema', code)
			console.log(formdata)
			functionService.createFunction(formdata)
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
		'dotnetcore1.0',
		'dotnetcore2.0',
		'dotnetcore2.1',
		'dotnetcore3.1',
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
				onChange={handleCodeChange}
				value={code}
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
