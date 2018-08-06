import { GENERIC_BROWSER_SCROLLBAR_WIDTH } from 'scripts/vars'

export default store => ({
  toggleModal(state) {
    let currentModalStore = Object.assign(state.modal, {})

    if (currentModalStore.state) {
      document.body.removeAttribute('style')
    } else {
      document.body.style.cssText = `padding-right: ${GENERIC_BROWSER_SCROLLBAR_WIDTH}px;overflow: hidden;`
    }

    store.setState({
      modal: {
        ...currentModalStore,
        state: !currentModalStore.state
      }
    })
  },

  setModalProps(state, props) {
    let currentModalStore = Object.assign(state.modal, {})

    store.setState({
      modal: {
        ...currentModalStore,
        props
      }
    })
  },

  setOnAccept(state, onAccept) {
    let currentModalStore = Object.assign(state.modal, {})

    store.setState({
      modal: {
        ...currentModalStore,
        onAccept
      }
    })
  },

  setOnClose(state, onClose) {
    let currentModalStore = Object.assign(state.modal, {})

    store.setState({
      modal: {
        ...currentModalStore,
        onClose
      }
    })
  }
})
