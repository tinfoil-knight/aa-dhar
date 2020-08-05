import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

import HomePage from './pages/HomePage'
import FunctionPage from './pages/FunctionPage'
import NewFunctionPage from './pages/NewFunctionPage'
import JobsPage from './pages/JobsPage'
import NewJobPage from './pages/NewJobPage'
import StatusPage from './pages/StatusPage'
import DocsPage from './pages/DocsPage'
import ErrorPage from './pages/ErrorPage'

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/functions" component={FunctionPage} />
			<Route path="/jobs" component={JobsPage} />
			<Route path="/documentation" component={DocsPage} />
			<Route path="/new" component={NewFunctionPage} />
			<Route path="/job/:id" component={StatusPage} />
			<Route path="/newjob" component={NewJobPage} />
			<Route component={ErrorPage} />
		</Switch>
	)
}

export default App
