import { h, Component } from 'preact'
import { connect } from 'unistore/preact'

import { actions } from 'store'

import Sidebar from './sidebar'
import SidebarTrigger from './sidebar-trigger'

import style from './styles.scss'

export default connect('mobileSidebarState', actions)(class RegionSidebar extends Component {
  constructor (props) {
    super(props)

    this.breakWidth = 650
    
    this.state = {
      isNarrowViewport: this.evalNarrowViewport()
    }

    this.evalNarrowViewport = this.evalNarrowViewport.bind(this)
    this.handleWindowResize = this.handleWindowResize.bind(this)
  }
  
  componentDidMount () {
    window.addEventListener('resize', this.handleWindowResize)
  }

  evalNarrowViewport () {
    return window.innerWidth <= this.breakWidth
  }

  handleWindowResize () {
    let widthState = this.evalNarrowViewport()
    this.setState({ isNarrowViewport: widthState })
  }

  render ({ mobileSidebarState, toggleSidebar }) {
    return (
      <div class={`flex ${style.regionSidebar} ${this.state.isNarrowViewport ? style.mobile : ''} ${this.state.isNarrowViewport && mobileSidebarState ? style.mobileActive : ''}`}>
        {this.state.isNarrowViewport && <SidebarTrigger />}
        {this.state.isNarrowViewport && mobileSidebarState && <div class={style.sidebarOverlay} onClick={toggleSidebar} />}
        <Sidebar />
      </div>
    )
  }
})
