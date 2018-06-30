import { h, render } from 'preact'

import Playground from './views/'

import './app.scss'

const mountPoint = document.querySelector('#linksh')

render(<Playground />, mountPoint, mountPoint.lastElementChild)
