import { h, Component } from 'preact'
import { connect } from 'unistore/preact'
import { bind } from 'decko'

import Button from '../../shared/button'
import VMenu from '../../shared/v-menu'

import { actions } from 'store'

export default connect(
  'vmenu',
  actions
)(
  class VMenus extends Component {
    @bind
    toggleMenuHandler() {
      this.props.toggleMenu()
    }

    render() {
      return (
        <div>
          <h3>Vertical menus</h3>
          <Button
            text="Open vertical menu"
            onClickExecute={this.toggleMenuHandler}
          />

          <VMenu>
            <p>VMenu</p>
          </VMenu>
        </div>
      )
    }
  }
)
