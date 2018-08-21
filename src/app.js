import { h, Component, render } from 'preact'
import { Provider } from 'unistore/preact'
import 'preact/debug'

import { store } from 'store'
import Router from './router'

import './app.scss'

const mountPoint = document.querySelector('#linksh')

// App is a Component instance to keep the hot reloading behaviour working
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

render(<App />, mountPoint, mountPoint.lastElementChild)
