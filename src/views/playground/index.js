import { h } from 'preact'

import Typography from './typography'
import Buttons from './buttons'
import Inputs from './forms'
import Modals from './modals'
import Spinners from './spinners'
import VMenus from './v-menus'

export default function Playground() {
  return (
    <div style="padding:24px;max-width: 500px">
      <Typography />
      <hr />
      <Buttons />
      <hr />
      <Inputs />
      <hr />
      <Modals />
      <hr />
      <Spinners />
      <hr />
      <VMenus />
    </div>
  )
}
