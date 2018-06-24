import { h } from 'preact'
import Ink from 'react-ink'

import style from './styles.scss'

export default function MenuButton({ title, sectionName }) {
  let currentPath = this.context.router.route.location.pathname.replace('/', '')
  let isActive = currentPath === sectionName
  return (
    <div class={`${style.buttonWrapper} ${isActive ? style.active : ''}`}>
      <button class={style.button}>{title}</button>
      <Ink />
    </div>
  )
}
