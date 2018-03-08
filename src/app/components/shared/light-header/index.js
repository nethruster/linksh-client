import { h } from 'preact'

import style from './styles.scss'

export default function LightHeader ({title}) {
  return (
    <h5 class={style.lightHeader}>{title}</h5>
  )
}
