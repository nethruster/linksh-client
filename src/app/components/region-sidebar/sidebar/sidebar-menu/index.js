import { h } from 'preact'
import { Link } from 'react-router-dom'
import { connect } from 'unistore/preact'

import { actions } from 'store'

import LightHeader from '../../../shared/light-header'
import MenuButton from './menu-button'

import style from './styles.scss'

export default connect(['mobileSidebarState', 'mobileViewportState'], actions)(({ mobileSidebarState, mobileViewportState, toggleSidebar }) => {
  return (
    <div class={style.menu}>
      <LightHeader title='linksh' sidebarHeader />
      <Link to='activity' onClick={mobileViewportState ? toggleSidebar : null}>
        <MenuButton title='My URLS' sectionName='activity' />
      </Link>
      <Link to='settings' onClick={mobileViewportState ? toggleSidebar : null}>
        <MenuButton title='Account Settings' sectionName='settings' />
      </Link>
      <MenuButton title='Log out' />
    </div>
  )
})
