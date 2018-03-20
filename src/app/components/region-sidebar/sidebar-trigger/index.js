import { h } from 'preact'
import { connect } from 'unistore/preact'

import { actions } from 'store'

import style from './styles.scss'

export default connect(['mobileSidebarState', 'mobileViewportState'], actions)(({ mobileSidebarState, mobileViewportState, toggleSidebar }) => {
  return (
    <div
      class={`flex flex-full-center ${style.triggerWrapper} ${mobileViewportState ? style.mobile : ''} ${mobileSidebarState ? style.mobileActive : ''}`}
      onClick={toggleSidebar}>
      {mobileSidebarState ? 'Close' : 'Menu'}
    </div>
  )
})
