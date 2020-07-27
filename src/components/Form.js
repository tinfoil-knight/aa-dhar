import React from 'react'
import { useFormik } from 'formik'

export default function Form() {
	const formik = useFormik({
		initialValues: {
			name: '',
			description: '',
			dockerImg: '',
			memory: '',
			url: '',
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2))
		},
	})
	return (
		<form onSubmit={formik.handleSubmit} className="spaced-t">
			<input
				id="name"
				name="name"
				className="input-text"
				type="text"
				placeholder="Function Name"
				onChange={formik.handleChange}
				value={formik.values.name}
				autoComplete="off"
				required
			/>
			<textarea
				id="description"
				name="description"
				className="input-text input-textarea"
				placeholder="Function Description"
				rows="10"
				onChange={formik.handleChange}
				value={formik.values.description}
				autoComplete="off"
				required
			></textarea>
			<select
				id="dockerImg"
				name="dockerImg"
				className="input-select"
				onChange={formik.handleChange}
				value={formik.values.dockerImg}
				required
			>
				<option value="" default>
					Select Docker Image
				</option>
				<option value="ubuntu">Ubuntu 20.04 LTS</option>
				<option value="alpine">Alpine Linux</option>
				<option value="fedora">Fedora 23</option>
			</select>
			<select
				id="memory"
				name="memory"
				className="input-select"
				onChange={formik.handleChange}
				value={formik.values.memory}
				required
			>
				<option value="" default>
					Select Memory Capacity
				</option>
				<option>1024 MB</option>
				<option>512 MB</option>
				<option>256 MB</option>
			</select>

			<input
				id="url"
				name="url"
				className="input-text"
				type="url"
				placeholder="Your GIT Repo URL here"
				onChange={formik.handleChange}
				value={formik.values.url}
				autoComplete="off"
				required
			/>
			<button type="submit" className="btn">
				Submit
			</button>
		</form>
	)
}
