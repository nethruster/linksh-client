import { h, render } from 'preact'
import { Provider } from 'unistore/preact'
import 'preact/debug'

import Playground from './views/playground'
import { store } from 'store'

import './app.scss'

const mountPoint = document.querySelector('#linksh')

const App = () => (
  <Provider store={store}>
    <Playground />
  </Provider>
)

render(<App />, mountPoint, mountPoint.lastElementChild)
