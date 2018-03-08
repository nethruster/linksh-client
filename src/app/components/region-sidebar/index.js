import { h } from 'preact'

import Sidebar from './sidebar'

import style from './styles.scss'

export default function RegionSidebar () {
  return (
    <div class={`flex ${style.regionSidebar}`}>
      <Sidebar />
    </div>
  )
}
