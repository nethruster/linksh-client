import { h, Component } from 'preact'
import { connect } from 'unistore/preact'
import Portal from 'preact-portal'
import { bind } from 'decko'

import { actions } from 'store'

export default connect(
  'vmenu',
  actions
)(
  class VMenuWrapper extends Component {
    @bind
    toggleMenuHandler() {
      this.props.toggleMenu(this.props.id)
    }

    // Doesn't update, why? That should solve the problem
    render({ into = 'body', children, vmenu, id }) {
      return (
        vmenu.hasOwnProperty(id) && (
          <Portal into={into}>
            <div class="vmenu-wrapper">
              <div class="vmenu-overlay" onClick={this.toggleMenuHandler} />
              {children}
            </div>
          </Portal>
        )
      )
    }
  }
)
