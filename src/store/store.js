import createStore from 'unistore'
import devtools from 'unistore/devtools'

import initialStore from './initial-store.js'
import { GENERIC_BROWSER_SCROLLBAR_WIDTH } from 'scripts/vars'

let store = null

if (module.hot || process.env.NODE_ENV !== 'production') {
  store = devtools(createStore(initialStore))
} else {
  store = createStore(initialStore)
}

let actions = store => ({
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

export { store, actions }
