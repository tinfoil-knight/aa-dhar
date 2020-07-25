import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import PackagePage from './pages/PackagePage'
import TestPage from './pages/TestPage'
import EmptyPage from './pages/EmptyPage'

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={EmptyPage} />
			<Route path="/packages" component={PackagePage} />
			<Route path="/test" component={TestPage} />
			<Route path="/billing" component={EmptyPage} />
			<Route path="/analytics" component={EmptyPage} />
			<Route path="/support" component={EmptyPage} />
			<Route path="/settings" component={EmptyPage} />
			<Route path="/documentation" component={EmptyPage} />
		</Switch>
	)
}

export default App
