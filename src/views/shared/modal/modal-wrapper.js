import { h, Component } from 'preact'
import { connect } from 'unistore/preact'
import Portal from 'preact-portal'
import { bind } from 'decko'
import CSSTransitionGroup from 'preact-transition-group'

import { actions } from 'store'

export default connect(
  'modal',
  actions
)(
  class ModalWrapper extends Component {
    @bind
    toggleModalHandler() {
      if (this.props.modal.state && this.props.modal.props.actionRequired) {
        return
      }

      this.props.toggleModal()
    }

    render({ into = 'body', children, modal }) {
      return (
        modal.state && (
          <Portal into={into}>
            {/* Transition wrapper would go here */}
            <div
              class="flex flex-full-center modal-wrapper"
              style={{ top: Math.round(window.pageYOffset) }}
            >
              <div class="modal-overlay" onClick={this.toggleModalHandler} />
              {children}
            </div>
          </Portal>
        )
      )
    }
  }
)
