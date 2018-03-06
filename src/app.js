import { h, render } from 'preact'

import App from './app/index.js'

if (module.hot || process.env.NODE_ENV !== 'production') {
  require('preact/devtools')
}

const mountPoint = document.getElementById('mount-point')

render(<App />, mountPoint, mountPoint.firstChild)
