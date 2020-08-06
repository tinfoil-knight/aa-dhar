import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

import HomePage from './pages/HomePage'
import FunctionsPage from './pages/FunctionsPage'
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
			<Route path="/functions" component={FunctionsPage} />
			<Route path="/function/:id" component={FunctionPage} />
			<Route path="/newftn" component={NewFunctionPage} />
			<Route path="/jobs" component={JobsPage} />
			<Route path="/job/:id" component={StatusPage} />
			<Route path="/newjob" component={NewJobPage} />
			<Route path="/documentation" component={DocsPage} />
			<Route component={ErrorPage} />
		</Switch>
	)
}

export default App
