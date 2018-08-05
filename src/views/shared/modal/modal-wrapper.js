import { h, Component } from 'preact'
import { connect } from 'unistore/preact'
import Portal from 'preact-portal'
import { bind } from 'decko'

import { actions } from 'store'

export default connect(
  'modal',
  actions
)(
  class ModalWrapper extends Component {
    @bind
    toggleModalHandler() {
      if (
        this.props.modal.modalState &&
        this.props.modal.modalProps.actionRequired
      )
        return

      this.props.toggleModal()
    }

    render({ into = 'body', children, modal }) {
      return modal.modalState ? (
        <Portal into={into}>
          <div
            class="modal-wrapper"
            style={{ top: Math.round(window.pageYOffset) }}
          >
            <div class="modal-overlay" onClick={this.toggleModalHandler} />
            {children}
          </div>
        </Portal>
      ) : null
    }
  }
)
