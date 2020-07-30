import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { toast } from 'react-toastify'

import TemplatePage from './TemplatePage'
import { changeId, resetAll } from '../reducer'

export default function HomePage() {
	const [id, setId] = useState('')
	const dispatch = useDispatch()
	const handleChange = e => {
		setId(e.currentTarget.value)
	}
	const handleSubmit = e => {
		e.preventDefault()
		dispatch(changeId(id))
		toast.info(`Changed FIU Id to: ${id}`)
	}

	const handleClick = () => {
		dispatch(resetAll())
		toast.info('Test variables are set')
	}
	return (
		<TemplatePage>
			<div className="pkg-box center">
				<div className="w-box spaced-t">
					<form onSubmit={handleSubmit} className="spaced-t">
						<input
							type="text"
							name="fiuId"
							id="fiuId"
							value={id}
							onChange={handleChange}
							placeholder="Enter your FIU Id"
							className="input-text"
							required
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
