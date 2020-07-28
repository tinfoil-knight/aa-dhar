import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import Editor from './Editor'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Form() {
	const [error, setError] = useState(null)
	const [message, setMessage] = useState(null)

	const errorHook = () => {
		if (error !== null) {
			toast.error(error)
		}
	}
	const messageHook = () => {
		if (message !== null) {
			toast.success(message.toString())
		}
	}

	useEffect(errorHook, [error])
	useEffect(messageHook, [message])

	const formik = useFormik({
		initialValues: {
			fiuId: '',
			jsonSchema: '',
			function: '',
		},
		onSubmit: values => {
			console.log(process.env.REACT_APP_FTN_POST)
			console.log(values)
			axios
				.post(process.env.REACT_APP_FTN_POST, values)
				.then(res => setMessage(res))
				.catch(err => setError(err.message))
		},
	})
	return (
		<form onSubmit={formik.handleSubmit} className="spaced-t">
			<input
				id="fiuId"
				name="fiuId"
				className="input-text"
				type="text"
				placeholder="FIU Id"
				onChange={formik.handleChange}
				value={formik.values.fiuId}
				autoComplete="off"
				required
			/>
			<Editor
				id="jsonSchema"
				name="jsonSchema"
				placeholder="Enter your JSON Schema"
				onChange={formik.handleChange}
				value={formik.values.jsonSchema}
				required
			/>
			<input
				id="function"
				name="function"
				className="input-text"
				type="text"
				placeholder="Path to file"
				onChange={formik.handleChange}
				value={formik.values.function}
				autoComplete="off"
				required
			/>
			<button type="submit" className="btn">
				Submit
			</button>
		</form>
	)
}
