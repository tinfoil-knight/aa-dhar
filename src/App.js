import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import FunctionPage from './pages/FunctionPage'
import JobsPage from './pages/JobsPage'
import NewFunctionPage from './pages/NewFunctionPage'
import EmptyPage from './pages/EmptyPage'

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={EmptyPage} />
			<Route path="/functions" component={FunctionPage} />
			<Route path="/jobs" component={JobsPage} />
			<Route path="/billing" component={EmptyPage} />
			<Route path="/analytics" component={EmptyPage} />
			<Route path="/support" component={EmptyPage} />
			<Route path="/settings" component={EmptyPage} />
			<Route path="/documentation" component={EmptyPage} />
			<Route path="/new" component={NewFunctionPage} />
		</Switch>
	)
}

export default App
