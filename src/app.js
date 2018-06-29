import { h, render } from 'preact'

import './app.scss'

const mountPoint = document.querySelector('#linksh')

render(<div>Linksh</div>, mountPoint, mountPoint.lastElementChild)
