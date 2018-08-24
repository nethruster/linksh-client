import { h, render } from 'preact'
import { connect } from 'unistore/preact'
import { bind } from 'decko'

import VMenuWrapper from './vmenu-wrapper'
import Button from '../button'

import { actions } from 'store'

export default connect(
  'vmenu',
  actions
)(
  class VMenu {
    @bind
    toggleMenuHandler() {
      this.props.toggleMenu()
    }

    render({ children }) {
      return (
        <VMenuWrapper>
          <div class="flex vmenu-container">
            <div>
              <Button
                iconButton
                noBorder
                icon="chevron-down"
                onClickExecute={this.toggleMenuHandler}
              />
            </div>
            <div class="vmenu-content">{children}</div>
          </div>
        </VMenuWrapper>
      )
    }
  }
)
