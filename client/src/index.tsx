import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './app/App'
import { store } from './store'
import * as serviceWorker from './serviceWorker'

import './styles/index.scss'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('app')
)

serviceWorker.unregister()
