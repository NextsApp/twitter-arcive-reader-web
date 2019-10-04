import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import App from './app'
import { Provider } from 'react-redux'
import store from './app/store'
import './index.scss'

ReactDOM.render(
  <div className="App">
    <Provider store={store({})}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root'),
)
serviceWorker.unregister()
