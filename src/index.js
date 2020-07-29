import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import globalReducer from './reducer'

const store = createStore(globalReducer)

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<HashRouter>
				<App />
			</HashRouter>
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
)
