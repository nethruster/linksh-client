import { h } from 'preact'

import style from './styles.scss'

export default function LightHeader({ title, darker, sidebarHeader }) {
  return (
    <h5
      class={`${style.lightHeader} ${darker ? style.darker : ''} ${
        sidebarHeader ? style.sidebarHeader : ''
      }`}
    >
      {title}
    </h5>
  )
}
