import { h } from 'preact'

import sprites from 'icons'

import style from './styles.scss'

export default function IconButton({ icon }) {
  return (
    <svg viewBox="0 0 24 24" class={style.icon}>
      {sprites[String(icon)]}
    </svg>
  )
}
