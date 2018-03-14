import { h } from 'preact'

import LightHeader from '../../../shared/light-header'
import MenuButton from './menu-button'

import style from './styles.scss'

export default function SidebarMenu () {
  return (
    <div class={style.menu}>
      <LightHeader title='linksh' />
      <MenuButton title='My URLS' sectionName='uActivity' />
      <MenuButton title='Account Settings' sectionName='uSettings' />
      <MenuButton title='Log out' />
    </div>
  )
}
