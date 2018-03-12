import { h } from 'preact'

import style from './styles.scss'

export default function LightHeader ({title, darker}) {
  return (
    <h5 class={`${style.lightHeader} ${darker ? style.darker : ''}`}>{title}</h5>
  )
}
