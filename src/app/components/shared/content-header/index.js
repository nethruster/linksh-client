import { h } from 'preact'

import style from './styles.scss'

export default function ContentHeader ({title}) {
  return (
    <h2 class={style.title}>{title}</h2>
  )
}
