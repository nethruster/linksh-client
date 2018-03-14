import { h, render } from 'preact'
import { Provider } from 'unistore/preact'

import App from './app/index.js'

import {store} from 'store'

if (module.hot || process.env.NODE_ENV !== 'production') {
  require('preact/devtools')
}

const mountPoint = document.getElementById('mount-point')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountPoint, mountPoint.firstChild)
