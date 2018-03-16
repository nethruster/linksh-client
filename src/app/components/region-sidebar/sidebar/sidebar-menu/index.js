import { h } from 'preact'
import { Link } from 'react-router-dom'

import LightHeader from '../../../shared/light-header'
import MenuButton from './menu-button'

import style from './styles.scss'

export default function SidebarMenu () {
  return (
    <div class={style.menu}>
      <LightHeader title='linksh' sidebarHeader />
      <Link to='activity'>
        <MenuButton title='My URLS' sectionName='activity' />
      </Link>
      <Link to='settings'>
        <MenuButton title='Account Settings' sectionName='settings' />
      </Link>
      <MenuButton title='Log out' />
    </div>
  )
}
