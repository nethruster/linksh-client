import { GENERIC_BROWSER_SCROLLBAR_WIDTH } from 'scripts/vars'

export default store => ({
  toggleModal(state) {
    let currentModalStore = Object.assign(state.modal, {})

    if (currentModalStore.state) {
      document.body.removeAttribute('style')
    } else {
      // TODO: Check if device is touchscreen device
      // document.body.style.cssText = `padding-right: ${GENERIC_BROWSER_SCROLLBAR_WIDTH}px;overflow: hidden;`
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

  toggleMenu(state) {
    let currentMenuStore = Object.assign(state.vmenu, {})

    if (currentMenuStore.state) {
      document.body.removeAttribute('style')
    } else {
      // TODO: Check if device is touchscreen device
      // document.body.style.cssText = `padding-right: ${GENERIC_BROWSER_SCROLLBAR_WIDTH}px;overflow: hidden;`
    }

    store.setState({
      vmenu: {
        ...currentMenuStore,
        state: !currentMenuStore.state
      }
    })
  },

  setMenuProps(state, props) {
    let currentMenuStore = Object.assign(state.vmenu, {})

    store.setState({
      vmenu: {
        ...currentMenuStore,
        props
      }
    })
  }
})
