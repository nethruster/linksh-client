import { h, Component } from 'preact'
import { connect } from 'unistore/preact'
import { bind } from 'decko'

import Button from '../../shared/button'
import Modal from '../../shared/modal'

import { actions } from 'store'

export default connect(
  'modal',
  actions
)(
  class Modals extends Component {
    @bind
    toggleModalHandler() {
      this.props.setModalProps({
        ...this.props.modal.modalProps,
        title: 'A modal Title',
        confirmButtonText: 'Accept',
        closeButtonText: 'Deny',
        actionRequired: true
      })

      this.props.toggleModal()
    }

    render() {
      return (
        <div>
          <h3>Modals</h3>

          <Button text="Open Modal" onClickExecute={this.toggleModalHandler} />
          <Modal>
            <p>Hello there</p>
          </Modal>
        </div>
      )
    }
  }
)
