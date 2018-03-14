import { h } from 'preact'

import style from './styles.scss'

export default function MenuButton ({ title, sectionName }) {
  let currentPath = this.context.router.route.location.pathname.replace('/', '')
  return (
    <div
      class={`${style.buttonWrapper} ${currentPath === sectionName ? style.active : ''}`}>
      <button class={style.button}>{title}</button>
    </div>
  )
}
