import App from '@/App'
import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		React.createElement(
			Provider,
			{ store: store },
			React.createElement(App)
		),
		document.querySelector('#root')
	)
})

