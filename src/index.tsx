import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'

import { AppStore } from './stores/AppStore'
import App from './components/App'

import 'semantic-ui-css/semantic.min.css'
import './components/App.scss'

const root = document.createElement('div')
document.body.appendChild(root)

const appStore = new AppStore()

render(
  <Provider appStore={appStore}>
    <App />
  </Provider>,
  root
)