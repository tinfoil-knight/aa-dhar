import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import TemplatePage from './TemplatePage'
import Function from '../components/Function'
import CreateNew from '../components/CreateNew'

export default function FunctionPage() {
	const rawData = {
		FUNCTION1_ID: {
			functionId: 'FUNCTION1_ID',
			jsonSchema: '',
			state: 'AVAILABLE',
			created: 'UTC DateTime String',
			lastUpdated: 'UTC DateTime String',
		},
		FUNCTION2_ID: {
			functionId: 'FUNCTION2_ID',
			jsonSchema: '',
			state: 'UNAVAILABLE',
			created: 'UTC DateTime String',
			lastUpdated: 'UTC DateTime String',
		},
		FUNCTION3_ID: {
			functionId: 'FUNCTION3_ID',
			jsonSchema: '',
			state: 'FAILED',
			created: 'UTC DateTime String',
			lastUpdated: 'UTC DateTime String',
		},
	}
	const data = Object.values(rawData)

	const [functions, setFunctions] = useState(null)
	const hook = () => {
		console.log('Fetching Functions')
		axios
			.get(process.env.REACT_APP_FTN_BY_ID)
			.then(res => setFunctions(res.functions))
			.catch(err => toast.error(err))
	}
	useEffect(hook, [functions])
	return (
		<TemplatePage>
			<div className="pkg-box">
				<h1>My Functions</h1>
				{data.map(el => (
					<Function
						functionId={el.functionId}
						jsonSchema={el.jsonSchema}
						state={el.state}
						created={el.created}
						lastUpdated={el.lastUpdated}
						key={el.functionId}
					/>
				))}
				<CreateNew />
			</div>
		</TemplatePage>
	)
}
