import { h, Component } from 'preact'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'unistore/preact'

import { actions } from 'store'

import RegionSidebar from './components/region-sidebar'
import RegionContent from './components/region-content'

// Global style and CSS custom properties
import 'reset.scss'
import 'normalize.scss'
import 'utils.scss'
import 'vars.scss'
import style from './styles.scss'

export default connect('mobileViewportState', actions)(class App extends Component {
  constructor (props) {
    super(props)

    this.breakWidth = 850

    this.state = {
      isNarrowViewport: this.evalNarrowViewport()
    }

    this.evalNarrowViewport = this.evalNarrowViewport.bind(this)
    this.handleWindowResize = this.handleWindowResize.bind(this)
  }

  componentDidMount () {
    this.evalNarrowViewport()
    this.handleWindowResize()
    window.addEventListener('resize', this.handleWindowResize)
  }

  evalNarrowViewport () {
    return window.innerWidth <= this.breakWidth
  }

  handleWindowResize () {
    if (this.evalNarrowViewport() && !this.props.mobileViewportState) {
      this.props.toggleMobileViewport()
    } else if (!this.evalNarrowViewport() && this.props.mobileViewportState) {
      this.props.toggleMobileViewport()
      // Return sidebar to desktop mode
      this.props.toggleSidebar()
    }
  }

  render () {
    return (
      <BrowserRouter>
        <div id={style.appWrapper} class='flex'>
          <RegionSidebar />
          <RegionContent />
        </div>
      </BrowserRouter>
    )
  }
})
