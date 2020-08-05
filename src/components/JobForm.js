import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'

import functionService from '../services/functionService'

import Editor from '../components/Editor'

export default function JobForm() {
	const [functions, setFunctions] = useState(null)
	const fiuId = useSelector(state => state.id)
	const functionsHook = () => {
		const fetchData = async () => {
			const data = await functionService.getFunctionsByFiuId(fiuId)
			if (data !== undefined) {
				let items = []
				for (let key in data.functions) {
					let item = data.functions[key]
					item['functionId'] = key
					items.push(item)
				}
				setFunctions(items)
			}
		}
		fetchData()
	}

	

	useEffect(functionsHook, [])

	const formik = useFormik({
		initialValues: {
			aaId: '',
			functionId: '',
			requestParams: '',
		},
		onSubmit: values => {
			var formdata = new FormData()

			formdata.append('fiuId', fiuId)
			formdata.append('aaId', values.aaId)
			formdata.append('functionId', values.functionId)
			formdata.append('requestParams', values.requestParams)

			functionService.createJob(formdata)
			toast.info('Job submitted, wait for some time')
		},
	})
	return (
		<form className="spaced-t" onSubmit={formik.handleSubmit}>
			<select
				name="functionId"
				value={formik.values.functionId}
				onChange={formik.handleChange}
				className="input-select"
				required
			>
				{functions === null ? (
					<option disabled>Fetching available functions</option>
				) : (
					<>
						<option value="" disabled selected>
							Select a function
						</option>
						{functions.map(el => (
							<option key={el.functionId} value={el.functionId}>
								{el.functionName + ':' + el.functionId}
							</option>
						))}
					</>
				)}
			</select>
			<input
				type="text"
				name="aaId"
				id="aaId"
				placeholder="AA Id"
				value={formik.aaId}
				onChange={formik.handleChange}
				className="input-text"
				required
			/>
			<Editor
				name="requestParams"
				value={formik.values.requestParams}
				onChange={formik.handleChange}
				placeholder="Enter Request Parameters here"
			/>
			<button className="btn" type="submit">
				Start Job
			</button>
		</form>
	)
}
