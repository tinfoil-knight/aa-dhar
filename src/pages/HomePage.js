import React from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'

import TemplatePage from './TemplatePage'
import changeId, { resetAll } from '../reducer'

export default function HomePage() {
	const dispatch = useDispatch()
	const formik = useFormik({
		initialValues: {
			fiuId: '',
		},
		onSubmit: values => {
			dispatch(changeId(values.fiuId))
			toast.info(`Changed FIU Id to: ${values.fiuId}`)
		},
	})
	const handleClick = () => {
		dispatch(resetAll())
		toast.info('Test variables are set')
	}
	return (
		<TemplatePage>
			<div className="pkg-box center">
				<div className="w-box spaced-t">
					<form
						onSubmit={formik.handleSubmit}
						onChange={formik.handleChange}
						value={formik.values.fiuId}
						className="spaced-t"
					>
						<input
							type="text"
							name="fiuId"
							id="fiuId"
							placeholder="Enter your FIU Id"
							className="input-text"
						/>
						<button type="submit" className="btn">
							Submit
						</button>
					</form>
					<div>
						<h2>Or</h2>
						<button onClick={handleClick} className="btn">
							Use Test ID
						</button>
					</div>
				</div>
			</div>
		</TemplatePage>
	)
}
