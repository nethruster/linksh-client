import { h, Component } from 'preact'
import { connect } from 'unistore/preact'
import { bind } from 'decko'

import NewLinkButton from './new-link-button'
import Button from '../../shared/button'
import VMenu from '../../shared/v-menu'

import { actions } from 'store'

import styles from './styles.scss'

export default connect(
  'vmenu',
  actions
)(
  class MenuBar extends Component {
    constructor(props) {
      super(props)

      this.menuId = 'dotsMenu'
    }

    @bind
    toggleMenuHandler() {
      this.props.toggleMenu(this.menuId)
    }

    render() {
      return (
        <div class={`flex flex-full-center ${styles.menubarWrapper}`}>
          <NewLinkButton />
          <Button
            iconButton
            icon="dots-menu"
            noBorder
            iconSize="24"
            customClass={`flex flex-full-center ${styles.menuButton}`}
            onClickExecute={this.toggleMenuHandler}
          />
          <VMenu id={this.menuId}>
            <p>Menu item</p>
          </VMenu>
        </div>
      )
    }
  }
)
