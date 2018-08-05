import { h } from 'preact'

import Typography from './typography'
import Buttons from './buttons'
import Inputs from './forms'
import Modals from './modals'

export default function Playground() {
  return (
    <div style="padding:24px;max-width: 500px">
      {/* <ul>
        <li>Typography</li>
        <li>Buttons</li>
        <li>Inputs/Forms</li>
        <li>Tables</li>
        <li>Lists</li>
        <li>Modals</li>
        <li>Toasts</li>
        <li>Loader</li>
      </ul> */}

      <Typography />
      <hr />
      <Buttons />
      <hr />
      <Inputs />
      <hr />
      <Modals />
    </div>
  )
}
