import { h, render } from 'preact'
import { Provider } from 'unistore/preact'
import 'preact/debug'

import { store } from 'store'

import './app.scss'

const mountPoint = document.querySelector('#linksh')

const App = () => (
  <Provider store={store}>
    <div>lknsh</div>
  </Provider>
)

render(<App />, mountPoint, mountPoint.lastElementChild)
