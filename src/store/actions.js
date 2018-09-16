import { GENERIC_BROWSER_SCROLLBAR_WIDTH } from 'scripts/vars'
import { vmenuGenerator } from 'scripts/utils'

export default store => ({
  toggleModal(state) {
    let nextModalStore = Object.assign(state.modal, {})

    if (nextModalStore.state) {
      document.body.removeAttribute('style')
    } else {
      // TODO: Check if device is touchscreen device
      // document.body.style.cssText = `padding-right: ${GENERIC_BROWSER_SCROLLBAR_WIDTH}px;overflow: hidden;`
    }

    store.setState({
      modal: {
        ...nextModalStore,
        state: !nextModalStore.state
      }
    })
  },

  setModalProps(state, props) {
    let nextModalStore = Object.assign(state.modal, {})

    store.setState({
      modal: {
        ...nextModalStore,
        props
      }
    })
  },

  toggleMenu(state, id, props) {
    let nextMenuStore = Object.assign(state.vmenu, {})

    if (nextMenuStore.hasOwnProperty(id)) {
      delete nextMenuStore[id]
      document.body.removeAttribute('style')
    } else {
      nextMenuStore[id] = {}

      if (props && typeof props === 'object') {
        nextMenuStore[id].props = props
      }
      // TODO: Check if device is touchscreen device
      // document.body.style.cssText = `padding-right: ${GENERIC_BROWSER_SCROLLBAR_WIDTH}px;overflow: hidden;`
    }

    store.setState({
      vmenu: {
        ...nextMenuStore
      }
    })
  },

  toggleAuthState(state) {
    let nextAuthStore = Object.assign(state.auth, {})

    store.setState({
      auth: {
        state: !nextAuthStore.state
      }
    })
  }
})
