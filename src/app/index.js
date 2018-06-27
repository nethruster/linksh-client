import { h, Component } from 'preact'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'unistore/preact'
import { bind } from 'decko'

import { actions } from 'store'

import RegionSidebar from './components/region-sidebar'
import RegionContent from './components/region-content'
import Login from './components/login'

// Global style and CSS custom properties
import 'reset.scss'
import 'normalize.scss'
import 'utils.scss'
import 'vars.scss'
import style from './styles.scss'

export default connect(
  ['mobileViewportState', 'isAuthenticated'],
  actions
)(
  class App extends Component {
    constructor(props) {
      super(props)

      this.breakWidth = 850

      this.state = {
        isNarrowViewport: this.evalNarrowViewport(),
        isConfigLoaded: false
      }
    }

    componentWillMount() {
      this.fetchConfig().then(result => {
        this.setState({ isConfigLoaded: true })
      })
    }

    componentDidMount() {
      this.evalNarrowViewport()
      this.handleWindowResize()
      window.addEventListener('resize', this.handleWindowResize)
    }

    @bind
    fetchConfig() {
      return fetch('/webclient/config').then(result => {
        return true
      })
    }

    @bind
    evalNarrowViewport() {
      return window.innerWidth <= this.breakWidth
    }

    @bind
    handleWindowResize() {
      if (this.evalNarrowViewport() && !this.props.mobileViewportState) {
        this.props.toggleMobileViewport()
      } else if (!this.evalNarrowViewport() && this.props.mobileViewportState) {
        this.props.toggleMobileViewport()
        // Return sidebar to desktop mode
        this.props.toggleSidebar()
      }
    }

    render() {
      if (!this.state.isConfigLoaded) {
        // TODO: Use a loader instead of text
        return <p>Loading</p>
      } else {
        return (
          <BrowserRouter>
            {this.props.isAuthenticated ? (
              <div id={style.appWrapper} class="flex">
                <RegionSidebar />
                <RegionContent />
              </div>
            ) : (
              <Login />
            )}
          </BrowserRouter>
        )
      }
    }
  }
)
