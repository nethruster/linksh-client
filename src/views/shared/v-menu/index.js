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
      this.props.toggleMenu(this.props.id)
    }

    render({ children, id, title }) {
      return (
        <VMenuWrapper id={id}>
          <div class="flex flex-dc vmenu-container">
            <div class="flex flex-sb vmenu-header">
              <h5>{title}</h5>
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
