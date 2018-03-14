import createStore from 'unistore'
import devtools from 'unistore/devtools'

import initialStore from './initial-store.js'

let store = null

if (module.hot || process.env.NODE_ENV !== 'production') {
  store = devtools(createStore(initialStore))
} else {
  store = createStore(initialStore)
}

let actions = store => ({ // eslint-disable-line no-unused-vars
  switchCurrentSection (state, newSection) {
    return { activeSection: newSection }
  }
})

export {
  store,
  actions
}
