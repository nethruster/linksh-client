import { h } from 'preact'

import LightHeader from '../../../shared/light-header'
import SidebarMenuButton from './sidebar-menu-button'

import style from './styles.scss'

export default function SidebarMenu () {
  return (
    <div class={style.menu}>
      <LightHeader title='linksh' />
      <SidebarMenuButton title='My URLS' isActive />
      <SidebarMenuButton title='Account Settings' />
      <SidebarMenuButton title='Log out' />
    </div>
  )
}
