import { h, Component } from 'preact'
import { connect } from 'unistore/preact'

import { actions } from 'store'

import Sidebar from './sidebar'
import SidebarTrigger from './sidebar-trigger'

import style from './styles.scss'

export default connect(
  ['mobileSidebarState', 'mobileViewportState'],
  actions
)(
  class RegionSidebar extends Component {
    render({ mobileSidebarState, mobileViewportState, toggleSidebar }) {
      return (
        <div
          class={`flex ${style.regionSidebar} ${
            mobileViewportState ? style.mobile : ''
          } ${
            mobileViewportState && mobileSidebarState ? style.mobileActive : ''
          }`}
        >
          <SidebarTrigger />
          <div
            class={`${style.sidebarOverlay} ${
              mobileViewportState && mobileSidebarState
                ? style.sidebarOverlayActive
                : ''
            }`}
            onClick={toggleSidebar}
          />
          <Sidebar />
        </div>
      )
    }
  }
)
