import { h } from 'preact'

import style from './styles.scss'

export default function MenuButton ({title, isActive}) {
  return (
    <div class={`${style.buttonWrapper} ${isActive ? style.active : ''}`}>
      <button class={style.button}>{title}</button>
    </div>
  )
}
