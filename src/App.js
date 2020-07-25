import React, { useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import './App.css'

import PackagePage from './pages/PackagePage'
import TestPage from './pages/TestPage'
import HomePage from './pages/HomePage'

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/packages" component={PackagePage} />
			<Route path="/test" component={TestPage} />
		</Switch>
	)
}

export default App
